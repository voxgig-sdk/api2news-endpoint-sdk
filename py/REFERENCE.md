# Api2newsEndpoint Python SDK Reference

Complete API reference for the Api2newsEndpoint Python SDK.


## Api2newsEndpointSDK

### Constructor

```python
from api2newsendpoint_sdk import Api2newsEndpointSDK

client = Api2newsEndpointSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Api2newsEndpointSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = Api2newsEndpointSDK.test()
```


### Instance Methods

#### `Bbc(data=None)`

Create a new `BbcEntity` instance. Pass `None` for no initial data.

#### `Cnn(data=None)`

Create a new `CnnEntity` instance. Pass `None` for no initial data.

#### `New(data=None)`

Create a new `NewEntity` instance. Pass `None` for no initial data.

#### `Techcrunch(data=None)`

Create a new `TechcrunchEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BbcEntity

```python
bbc = client.Bbc()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `str` | No |  |
| `content` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `imageUrl` | `str` | No |  |
| `publishedAt` | `str` | No |  |
| `source` | `str` | No |  |
| `title` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Bbc().list()
for bbc in results:
    print(bbc)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BbcEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CnnEntity

```python
cnn = client.Cnn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `str` | No |  |
| `content` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `imageUrl` | `str` | No |  |
| `publishedAt` | `str` | No |  |
| `source` | `str` | No |  |
| `title` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Cnn().list()
for cnn in results:
    print(cnn)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CnnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewEntity

```python
new = client.New()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `str` | No |  |
| `content` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `imageUrl` | `str` | No |  |
| `publishedAt` | `str` | No |  |
| `source` | `str` | No |  |
| `title` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.New().list()
for new in results:
    print(new)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TechcrunchEntity

```python
techcrunch = client.Techcrunch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `str` | No |  |
| `content` | `str` | No |  |
| `description` | `str` | No |  |
| `id` | `str` | No |  |
| `imageUrl` | `str` | No |  |
| `publishedAt` | `str` | No |  |
| `source` | `str` | No |  |
| `title` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Techcrunch().list()
for techcrunch in results:
    print(techcrunch)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TechcrunchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = Api2newsEndpointSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

