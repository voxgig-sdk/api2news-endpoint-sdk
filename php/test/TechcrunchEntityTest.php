<?php
declare(strict_types=1);

// Techcrunch entity test

require_once __DIR__ . '/../api2newsendpoint_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TechcrunchEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = Api2newsEndpointSDK::test(null, null);
        $ent = $testsdk->Techcrunch(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = techcrunch_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "techcrunch." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set API_NEWSENDPOINT_TEST_TECHCRUNCH_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $techcrunch_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.techcrunch")));
        $techcrunch_ref01_data = null;
        if (count($techcrunch_ref01_data_raw) > 0) {
            $techcrunch_ref01_data = Helpers::to_map($techcrunch_ref01_data_raw[0][1]);
        }

        // LIST
        $techcrunch_ref01_ent = $client->Techcrunch(null);
        $techcrunch_ref01_match = [];

        [$techcrunch_ref01_list_result, $err] = $techcrunch_ref01_ent->list($techcrunch_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($techcrunch_ref01_list_result);

    }
}

function techcrunch_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/techcrunch/TechcrunchTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = Api2newsEndpointSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["techcrunch01", "techcrunch02", "techcrunch03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("API_NEWSENDPOINT_TEST_TECHCRUNCH_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "API_NEWSENDPOINT_TEST_TECHCRUNCH_ENTID" => $idmap,
        "API_NEWSENDPOINT_TEST_LIVE" => "FALSE",
        "API_NEWSENDPOINT_TEST_EXPLAIN" => "FALSE",
        "API_NEWSENDPOINT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["API_NEWSENDPOINT_TEST_TECHCRUNCH_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["API_NEWSENDPOINT_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["API_NEWSENDPOINT_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new Api2newsEndpointSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["API_NEWSENDPOINT_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["API_NEWSENDPOINT_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
