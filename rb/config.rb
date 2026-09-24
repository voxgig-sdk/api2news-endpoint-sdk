# Api2newsEndpoint SDK configuration

module Api2newsEndpointConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Api2newsEndpoint",
        "slug" => "api2news-endpoint",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api2news.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "bbc" => {},
          "cnn" => {},
          "new" => {},
          "techcrunch" => {},
        },
      },
      "entity" => {
        "bbc" => {
          "fields" => [
            {
              "name" => "author",
              "title" => "Author",
              "type" => "`$STRING`",
              "short" => "Article author name",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "Article content excerpt",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Brief summary of the article",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the article",
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "short" => "URL to the article's featured image",
              "format" => "uri",
            },
            {
              "name" => "publishedAt",
              "title" => "Published At",
              "type" => "`$STRING`",
              "short" => "Publication date and time",
              "format" => "date-time",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
              "short" => "News source (BBC, TechCrunch, CNN)",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Article headline",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "short" => "URL to the full article",
              "format" => "uri",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "bbc",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/news/bbc",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "news",
                    },
                    {
                      "lit" => "bbc",
                    },
                  ],
                  "parts" => [
                    "api",
                    "news",
                    "bbc",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.articles`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "query",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "cnn" => {
          "fields" => [
            {
              "name" => "author",
              "title" => "Author",
              "type" => "`$STRING`",
              "short" => "Article author name",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "Article content excerpt",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Brief summary of the article",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the article",
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "short" => "URL to the article's featured image",
              "format" => "uri",
            },
            {
              "name" => "publishedAt",
              "title" => "Published At",
              "type" => "`$STRING`",
              "short" => "Publication date and time",
              "format" => "date-time",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
              "short" => "News source (BBC, TechCrunch, CNN)",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Article headline",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "short" => "URL to the full article",
              "format" => "uri",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "cnn",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/news/cnn",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "news",
                    },
                    {
                      "lit" => "cnn",
                    },
                  ],
                  "parts" => [
                    "api",
                    "news",
                    "cnn",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.articles`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "query",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "new" => {
          "fields" => [
            {
              "name" => "author",
              "title" => "Author",
              "type" => "`$STRING`",
              "short" => "Article author name",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "Article content excerpt",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Brief summary of the article",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the article",
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "short" => "URL to the article's featured image",
              "format" => "uri",
            },
            {
              "name" => "publishedAt",
              "title" => "Published At",
              "type" => "`$STRING`",
              "short" => "Publication date and time",
              "format" => "date-time",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
              "short" => "News source (BBC, TechCrunch, CNN)",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Article headline",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "short" => "URL to the full article",
              "format" => "uri",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "new",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/news",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "news",
                    },
                  ],
                  "parts" => [
                    "api",
                    "news",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.articles`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "source",
                        "orig" => "source",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "query",
                      "source",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "techcrunch" => {
          "fields" => [
            {
              "name" => "author",
              "title" => "Author",
              "type" => "`$STRING`",
              "short" => "Article author name",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "Article content excerpt",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Brief summary of the article",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "short" => "Unique identifier for the article",
            },
            {
              "name" => "imageUrl",
              "title" => "Image Url",
              "type" => "`$STRING`",
              "short" => "URL to the article's featured image",
              "format" => "uri",
            },
            {
              "name" => "publishedAt",
              "title" => "Published At",
              "type" => "`$STRING`",
              "short" => "Publication date and time",
              "format" => "date-time",
            },
            {
              "name" => "source",
              "title" => "Source",
              "type" => "`$STRING`",
              "short" => "News source (BBC, TechCrunch, CNN)",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Article headline",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "short" => "URL to the full article",
              "format" => "uri",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "techcrunch",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/news/techcrunch",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "news",
                    },
                    {
                      "lit" => "techcrunch",
                    },
                  ],
                  "parts" => [
                    "api",
                    "news",
                    "techcrunch",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.articles`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 10,
                      },
                      {
                        "name" => "query",
                        "orig" => "query",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "limit",
                      "query",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    Api2newsEndpointFeatures.make_feature(name)
  end
end
