# Api2newsEndpoint SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Api2newsEndpoint",
            "slug": "api2news-endpoint",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api2news.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "bbc": {},
                "cnn": {},
                "new": {},
                "techcrunch": {},
            },
        },
        "entity": {
      "bbc": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "short": "Article author name",
          },
          {
            "name": "content",
            "title": "Content",
            "type": "`$STRING`",
            "short": "Article content excerpt",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Brief summary of the article",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the article",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to the article's featured image",
            "format": "uri",
          },
          {
            "name": "publishedAt",
            "title": "Published At",
            "type": "`$STRING`",
            "short": "Publication date and time",
            "format": "date-time",
          },
          {
            "name": "source",
            "title": "Source",
            "type": "`$STRING`",
            "short": "News source (BBC, TechCrunch, CNN)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Article headline",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "URL to the full article",
            "format": "uri",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "bbc",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/news/bbc",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "news",
                  },
                  {
                    "lit": "bbc",
                  },
                ],
                "parts": [
                  "api",
                  "news",
                  "bbc",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.articles`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "query",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "cnn": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "short": "Article author name",
          },
          {
            "name": "content",
            "title": "Content",
            "type": "`$STRING`",
            "short": "Article content excerpt",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Brief summary of the article",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the article",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to the article's featured image",
            "format": "uri",
          },
          {
            "name": "publishedAt",
            "title": "Published At",
            "type": "`$STRING`",
            "short": "Publication date and time",
            "format": "date-time",
          },
          {
            "name": "source",
            "title": "Source",
            "type": "`$STRING`",
            "short": "News source (BBC, TechCrunch, CNN)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Article headline",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "URL to the full article",
            "format": "uri",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "cnn",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/news/cnn",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "news",
                  },
                  {
                    "lit": "cnn",
                  },
                ],
                "parts": [
                  "api",
                  "news",
                  "cnn",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.articles`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "query",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "new": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "short": "Article author name",
          },
          {
            "name": "content",
            "title": "Content",
            "type": "`$STRING`",
            "short": "Article content excerpt",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Brief summary of the article",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the article",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to the article's featured image",
            "format": "uri",
          },
          {
            "name": "publishedAt",
            "title": "Published At",
            "type": "`$STRING`",
            "short": "Publication date and time",
            "format": "date-time",
          },
          {
            "name": "source",
            "title": "Source",
            "type": "`$STRING`",
            "short": "News source (BBC, TechCrunch, CNN)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Article headline",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "URL to the full article",
            "format": "uri",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "new",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/news",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "news",
                  },
                ],
                "parts": [
                  "api",
                  "news",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.articles`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "source",
                      "orig": "source",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "query",
                    "source",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "techcrunch": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$STRING`",
            "short": "Article author name",
          },
          {
            "name": "content",
            "title": "Content",
            "type": "`$STRING`",
            "short": "Article content excerpt",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Brief summary of the article",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the article",
          },
          {
            "name": "imageUrl",
            "title": "Image Url",
            "type": "`$STRING`",
            "short": "URL to the article's featured image",
            "format": "uri",
          },
          {
            "name": "publishedAt",
            "title": "Published At",
            "type": "`$STRING`",
            "short": "Publication date and time",
            "format": "date-time",
          },
          {
            "name": "source",
            "title": "Source",
            "type": "`$STRING`",
            "short": "News source (BBC, TechCrunch, CNN)",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Article headline",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "URL to the full article",
            "format": "uri",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "techcrunch",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/api/news/techcrunch",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "news",
                  },
                  {
                    "lit": "techcrunch",
                  },
                ],
                "parts": [
                  "api",
                  "news",
                  "techcrunch",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.articles`",
                },
                "args": {
                  "query": [
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "query",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "limit",
                    "query",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
