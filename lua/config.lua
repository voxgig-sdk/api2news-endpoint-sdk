-- Api2newsEndpoint SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Api2newsEndpoint",
      slug = "api2news-endpoint",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api2news.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["bbc"] = {},
        ["cnn"] = {},
        ["new"] = {},
        ["techcrunch"] = {},
      },
    },
    entity = {
      ["bbc"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Article author name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["short"] = "Article content excerpt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Brief summary of the article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the article",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "imageUrl",
            ["short"] = "URL to the article's featured image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "publishedAt",
            ["short"] = "Publication date and time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["short"] = "News source (BBC, TechCrunch, CNN)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Article headline",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "URL to the full article",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "bbc",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/news/bbc",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "news",
                  },
                  {
                    ["lit"] = "bbc",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.articles`",
                },
                ["parts"] = {
                  "api",
                  "news",
                  "bbc",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["cnn"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Article author name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["short"] = "Article content excerpt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Brief summary of the article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the article",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "imageUrl",
            ["short"] = "URL to the article's featured image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "publishedAt",
            ["short"] = "Publication date and time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["short"] = "News source (BBC, TechCrunch, CNN)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Article headline",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "URL to the full article",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "cnn",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/news/cnn",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "news",
                  },
                  {
                    ["lit"] = "cnn",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.articles`",
                },
                ["parts"] = {
                  "api",
                  "news",
                  "cnn",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["new"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Article author name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["short"] = "Article content excerpt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Brief summary of the article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the article",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "imageUrl",
            ["short"] = "URL to the article's featured image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "publishedAt",
            ["short"] = "Publication date and time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["short"] = "News source (BBC, TechCrunch, CNN)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Article headline",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "URL to the full article",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "new",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "source",
                      ["orig"] = "source",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/news",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "news",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "query",
                    "source",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.articles`",
                },
                ["parts"] = {
                  "api",
                  "news",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["techcrunch"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Article author name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["short"] = "Article content excerpt",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Brief summary of the article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the article",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "imageUrl",
            ["short"] = "URL to the article's featured image",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "publishedAt",
            ["short"] = "Publication date and time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["short"] = "News source (BBC, TechCrunch, CNN)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Article headline",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "URL to the full article",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "techcrunch",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/news/techcrunch",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "news",
                  },
                  {
                    ["lit"] = "techcrunch",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "query",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.articles`",
                },
                ["parts"] = {
                  "api",
                  "news",
                  "techcrunch",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
