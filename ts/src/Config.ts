
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Api2newsEndpoint',
        slug: "api2news-endpoint",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api2news.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      bbc: {
      },

      cnn: {
      },

      new: {
      },

      techcrunch: {
      },

    }
  }


  entity = {
    "bbc": {
      "fields": [
        {
          "name": "author",
          "short": "Article author name",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "short": "Article content excerpt",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Brief summary of the article",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the article",
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "short": "URL to the article's featured image",
          "type": "`$STRING`"
        },
        {
          "name": "publishedAt",
          "short": "Publication date and time",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "News source (BBC, TechCrunch, CNN)",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Article headline",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the full article",
          "type": "`$STRING`"
        }
      ],
      "name": "bbc",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/news/bbc",
              "parts": [
                "api",
                "news",
                "bbc"
              ],
              "select": {
                "exist": [
                  "limit",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.articles`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "cnn": {
      "fields": [
        {
          "name": "author",
          "short": "Article author name",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "short": "Article content excerpt",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Brief summary of the article",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the article",
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "short": "URL to the article's featured image",
          "type": "`$STRING`"
        },
        {
          "name": "publishedAt",
          "short": "Publication date and time",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "News source (BBC, TechCrunch, CNN)",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Article headline",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the full article",
          "type": "`$STRING`"
        }
      ],
      "name": "cnn",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/news/cnn",
              "parts": [
                "api",
                "news",
                "cnn"
              ],
              "select": {
                "exist": [
                  "limit",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.articles`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "new": {
      "fields": [
        {
          "name": "author",
          "short": "Article author name",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "short": "Article content excerpt",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Brief summary of the article",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the article",
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "short": "URL to the article's featured image",
          "type": "`$STRING`"
        },
        {
          "name": "publishedAt",
          "short": "Publication date and time",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "News source (BBC, TechCrunch, CNN)",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Article headline",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the full article",
          "type": "`$STRING`"
        }
      ],
      "name": "new",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "source",
                    "orig": "source",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/news",
              "parts": [
                "api",
                "news"
              ],
              "select": {
                "exist": [
                  "limit",
                  "query",
                  "source"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.articles`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "techcrunch": {
      "fields": [
        {
          "name": "author",
          "short": "Article author name",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "short": "Article content excerpt",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Brief summary of the article",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the article",
          "type": "`$STRING`"
        },
        {
          "name": "imageUrl",
          "short": "URL to the article's featured image",
          "type": "`$STRING`"
        },
        {
          "name": "publishedAt",
          "short": "Publication date and time",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "News source (BBC, TechCrunch, CNN)",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Article headline",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the full article",
          "type": "`$STRING`"
        }
      ],
      "name": "techcrunch",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/news/techcrunch",
              "parts": [
                "api",
                "news",
                "techcrunch"
              ],
              "select": {
                "exist": [
                  "limit",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.articles`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

