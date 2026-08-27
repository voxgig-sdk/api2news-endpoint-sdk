# Api2newsEndpoint TypeScript SDK Reference

Complete API reference for the Api2newsEndpoint TypeScript SDK.


## Api2newsEndpointSDK

### Constructor

```ts
new Api2newsEndpointSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Api2newsEndpointSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = Api2newsEndpointSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `Api2newsEndpointSDK` instance in test mode.


### Instance Methods

#### `Bbc(data?: object)`

Create a new `Bbc` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BbcEntity` instance.

#### `Cnn(data?: object)`

Create a new `Cnn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CnnEntity` instance.

#### `New(data?: object)`

Create a new `New` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewEntity` instance.

#### `Techcrunch(data?: object)`

Create a new `Techcrunch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TechcrunchEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `Api2newsEndpointSDK.test()`.

**Returns:** `Api2newsEndpointSDK` instance in test mode.


---

## BbcEntity

```ts
const bbc = client.Bbc()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Bbc().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BbcEntity` instance with the same client and
options.

#### `client()`

Return the parent `Api2newsEndpointSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CnnEntity

```ts
const cnn = client.Cnn()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Cnn().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CnnEntity` instance with the same client and
options.

#### `client()`

Return the parent `Api2newsEndpointSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewEntity

```ts
const new_ = client.New()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.New().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewEntity` instance with the same client and
options.

#### `client()`

Return the parent `Api2newsEndpointSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TechcrunchEntity

```ts
const techcrunch = client.Techcrunch()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Techcrunch().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TechcrunchEntity` instance with the same client and
options.

#### `client()`

Return the parent `Api2newsEndpointSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new Api2newsEndpointSDK({
  feature: {
    test: { active: true },
  }
})
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

