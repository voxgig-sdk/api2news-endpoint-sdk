# Api2newsEndpoint SDK

Fetch latest news articles from major publications like BBC, CNN, and TechCrunch via simple GET requests

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About API2NEWS Endpoint

API2NEWS is a small news-aggregation API that exposes the latest stories from a handful of well-known publications through a single HTTP endpoint at `https://endpoint.api2.news/`. It is listed on the freepublicapis.com community catalogue as a free, no-frills source for headline data.

What you get from the API:

- Recent articles from supported publications (BBC, CNN, TechCrunch, and similar)
- Per-publication GET endpoints so you can request stories from one source at a time
- Query-parameter filtering for narrowing the result set to specific articles

Operational notes: the endpoint does not advertise authentication or documented rate limits, and CORS is reportedly disabled, so browser-side calls will need a proxy. Community monitoring on freepublicapis.com has flagged the service as unreliable in recent checks, so treat availability as best-effort and build in retry/fallback logic if you depend on it.

## Try it

**TypeScript**
```bash
npm install api2news-endpoint
```

**Python**
```bash
pip install api2news-endpoint-sdk
```

**PHP**
```bash
composer require voxgig/api2news-endpoint-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/api2news-endpoint-sdk/go
```

**Ruby**
```bash
gem install api2news-endpoint-sdk
```

**Lua**
```bash
luarocks install api2news-endpoint-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { Api2newsEndpointSDK } from 'api2news-endpoint'

const client = new Api2newsEndpointSDK({})

// List all bbcs
const bbcs = await client.Bbc().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o api2news-endpoint-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "api2news-endpoint": {
      "command": "/abs/path/to/api2news-endpoint-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Bbc** | BBC news articles exposed via a dedicated GET path for retrieving the publication's latest stories. | `/api/news/bbc` |
| **Cnn** | CNN news articles exposed via a dedicated GET path for retrieving the publication's latest stories. | `/api/news/cnn` |
| **New** | Grouping for the generic 'latest / new' article endpoints that surface freshly published items across the supported sources. | `/api/news` |
| **Techcrunch** | TechCrunch articles exposed via a dedicated GET path for retrieving the publication's latest technology stories. | `/api/news/techcrunch` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from api2newsendpoint_sdk import Api2newsEndpointSDK

client = Api2newsEndpointSDK({})

# List all bbcs
bbcs, err = client.Bbc(None).list(None, None)
```

### PHP

```php
<?php
require_once 'api2newsendpoint_sdk.php';

$client = new Api2newsEndpointSDK([]);

// List all bbcs
[$bbcs, $err] = $client->Bbc(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/api2news-endpoint-sdk/go"

client := sdk.NewApi2newsEndpointSDK(map[string]any{})

// List all bbcs
bbcs, err := client.Bbc(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Api2newsEndpoint_sdk"

client = Api2newsEndpointSDK.new({})

# List all bbcs
bbcs, err = client.Bbc(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("api2news-endpoint_sdk")

local client = sdk.new({})

-- List all bbcs
local bbcs, err = client:Bbc(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = Api2newsEndpointSDK.test()
const result = await client.Bbc().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = Api2newsEndpointSDK.test(None, None)
result, err = client.Bbc(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = Api2newsEndpointSDK::test(null, null);
[$result, $err] = $client->Bbc(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Bbc(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = Api2newsEndpointSDK.test(nil, nil)
result, err = client.Bbc(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Bbc(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the API2NEWS Endpoint

- Upstream: [https://api2news.com](https://api2news.com)
- API docs: [https://freepublicapis.com/api2news-endpoint](https://freepublicapis.com/api2news-endpoint)

- The API2NEWS provider does not publish explicit licence terms for the aggregated content.
- News articles remain the property of their original publishers (BBC, CNN, TechCrunch, etc.); check each source's terms before redistributing.
- Verify attribution requirements with the upstream publication if you reuse article text, headlines, or images.

---

Generated from the API2NEWS Endpoint OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
