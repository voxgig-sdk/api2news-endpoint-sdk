# Api2newsEndpoint SDK

API2NEWS Endpoint client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

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

## Quickstart

### TypeScript

```ts
import { Api2newsEndpointSDK } from 'api2news-endpoint'

const client = new Api2newsEndpointSDK({
  apikey: process.env.API2NEWS-ENDPOINT_APIKEY,
})

// List all bbcs
const bbcs = await client.Bbc().list()
console.log(bbcs.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

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
| **Bbc** |  | `/api/news/bbc` |
| **Cnn** |  | `/api/news/cnn` |
| **New** |  | `/api/news` |
| **Techcrunch** |  | `/api/news/techcrunch` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from api2newsendpoint_sdk import Api2newsEndpointSDK

client = Api2newsEndpointSDK({
    "apikey": os.environ.get("API2NEWS-ENDPOINT_APIKEY"),
})

# List all bbcs
bbcs, err = client.Bbc().list()
print(bbcs)
```

### PHP

```php
<?php
require_once 'api2newsendpoint_sdk.php';

$client = new Api2newsEndpointSDK([
    "apikey" => getenv("API2NEWS-ENDPOINT_APIKEY"),
]);

// List all bbcs
[$bbcs, $err] = $client->Bbc()->list();
print_r($bbcs);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/api2news-endpoint-sdk/go"

client := sdk.NewApi2newsEndpointSDK(map[string]any{
    "apikey": os.Getenv("API2NEWS-ENDPOINT_APIKEY"),
})

// List all bbcs
bbcs, err := client.Bbc(nil).List(nil, nil)
fmt.Println(bbcs)
```

### Ruby

```ruby
require_relative "Api2newsEndpoint_sdk"

client = Api2newsEndpointSDK.new({
  "apikey" => ENV["API2NEWS-ENDPOINT_APIKEY"],
})

# List all bbcs
bbcs, err = client.Bbc().list
puts bbcs
```

### Lua

```lua
local sdk = require("api2news-endpoint_sdk")

local client = sdk.new({
  apikey = os.getenv("API2NEWS-ENDPOINT_APIKEY"),
})

-- List all bbcs
local bbcs, err = client:Bbc():list()
print(bbcs)
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
client = Api2newsEndpointSDK.test()
result, err = client.Bbc().load({"id": "test01"})
```

### PHP

```php
$client = Api2newsEndpointSDK::test();
[$result, $err] = $client->Bbc()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Bbc(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = Api2newsEndpointSDK.test
result, err = client.Bbc().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Bbc():load({ id = "test01" })
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

---

Generated from the API2NEWS Endpoint OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
