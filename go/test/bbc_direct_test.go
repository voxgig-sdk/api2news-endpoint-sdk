package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/api2news-endpoint-sdk/go"
	"github.com/voxgig-sdk/api2news-endpoint-sdk/go/core"
)

func TestBbcDirect(t *testing.T) {
	t.Run("direct-list-bbc", func(t *testing.T) {
		setup := bbcDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-bbc", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client


		result, err := client.Direct(map[string]any{
			"path":   "api/news/bbc",
			"method": "GET",
			"params": map[string]any{},
		})
		if setup.live {
			// Live mode is lenient: synthetic IDs frequently 4xx and the
			// list-response shape varies wildly across public APIs. Skip
			// rather than fail when the call doesn't return a usable list.
			if err != nil {
				t.Skipf("list call failed (likely synthetic IDs against live API): %v", err)
			}
			if result["ok"] != true {
				t.Skipf("list call not ok (likely synthetic IDs against live API): %v", result)
			}
			status := core.ToInt(result["status"])
			if status < 200 || status >= 300 {
				t.Skipf("expected 2xx status, got %v", result["status"])
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
		}
	})

}

type bbcDirectSetupResult struct {
	client *sdk.Api2newsEndpointSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func bbcDirectSetup(mockres any) *bbcDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"API_NEWSENDPOINT_TEST_BBC_ENTID": map[string]any{},
		"API_NEWSENDPOINT_TEST_LIVE":    "FALSE",
		"API_NEWSENDPOINT_APIKEY":       "NONE",
	})

	live := env["API_NEWSENDPOINT_TEST_LIVE"] == "TRUE"

	if live {
		mergedOpts := map[string]any{
			"apikey": env["API_NEWSENDPOINT_APIKEY"],
		}
		client := sdk.NewApi2newsEndpointSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["API_NEWSENDPOINT_TEST_BBC_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &bbcDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewApi2newsEndpointSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &bbcDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal
