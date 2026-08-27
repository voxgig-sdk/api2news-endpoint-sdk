# Api2newsEndpoint PHP SDK Reference

Complete API reference for the Api2newsEndpoint PHP SDK.


## Api2newsEndpointSDK

### Constructor

```php
require_once __DIR__ . '/api2newsendpoint_sdk.php';

$client = new Api2newsEndpointSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Api2newsEndpointSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = Api2newsEndpointSDK::test();
```


### Instance Methods

#### `Bbc($data = null)`

Create a new `BbcEntity` instance. Pass `null` for no initial data.

#### `Cnn($data = null)`

Create a new `CnnEntity` instance. Pass `null` for no initial data.

#### `New($data = null)`

Create a new `NewEntity` instance. Pass `null` for no initial data.

#### `Techcrunch($data = null)`

Create a new `TechcrunchEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): Api2newsEndpointUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BbcEntity

```php
$bbc = $client->Bbc();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No | Article author name |
| `content` | `string` | No | Article content excerpt |
| `description` | `string` | No | Brief summary of the article |
| `id` | `string` | No | Unique identifier for the article |
| `imageUrl` | `string` | No | URL to the article's featured image |
| `publishedAt` | `string` | No | Publication date and time |
| `source` | `string` | No | News source (BBC, TechCrunch, CNN) |
| `title` | `string` | No | Article headline |
| `url` | `string` | No | URL to the full article |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Bbc()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BbcEntity`

Create a new `BbcEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CnnEntity

```php
$cnn = $client->Cnn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No | Article author name |
| `content` | `string` | No | Article content excerpt |
| `description` | `string` | No | Brief summary of the article |
| `id` | `string` | No | Unique identifier for the article |
| `imageUrl` | `string` | No | URL to the article's featured image |
| `publishedAt` | `string` | No | Publication date and time |
| `source` | `string` | No | News source (BBC, TechCrunch, CNN) |
| `title` | `string` | No | Article headline |
| `url` | `string` | No | URL to the full article |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cnn()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CnnEntity`

Create a new `CnnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NewEntity

```php
$new = $client->New();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No | Article author name |
| `content` | `string` | No | Article content excerpt |
| `description` | `string` | No | Brief summary of the article |
| `id` | `string` | No | Unique identifier for the article |
| `imageUrl` | `string` | No | URL to the article's featured image |
| `publishedAt` | `string` | No | Publication date and time |
| `source` | `string` | No | News source (BBC, TechCrunch, CNN) |
| `title` | `string` | No | Article headline |
| `url` | `string` | No | URL to the full article |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->New()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NewEntity`

Create a new `NewEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TechcrunchEntity

```php
$techcrunch = $client->Techcrunch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No | Article author name |
| `content` | `string` | No | Article content excerpt |
| `description` | `string` | No | Brief summary of the article |
| `id` | `string` | No | Unique identifier for the article |
| `imageUrl` | `string` | No | URL to the article's featured image |
| `publishedAt` | `string` | No | Publication date and time |
| `source` | `string` | No | News source (BBC, TechCrunch, CNN) |
| `title` | `string` | No | Article headline |
| `url` | `string` | No | URL to the full article |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Techcrunch()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TechcrunchEntity`

Create a new `TechcrunchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new Api2newsEndpointSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

