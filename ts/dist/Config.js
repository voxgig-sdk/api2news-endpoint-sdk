"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Api2newsEndpoint',
        slug: "api2news-endpoint",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api2news.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            bbc: {},
            cnn: {},
            new: {},
            techcrunch: {},
        }
    };
    entity = {
        "bbc": {
            "fields": [
                {
                    "name": "author",
                    "title": "Author",
                    "type": "`$STRING`",
                    "short": "Article author name"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`",
                    "short": "Article content excerpt"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Brief summary of the article"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the article"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`",
                    "short": "URL to the article's featured image",
                    "format": "uri"
                },
                {
                    "name": "publishedAt",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "short": "Publication date and time",
                    "format": "date-time"
                },
                {
                    "name": "source",
                    "title": "Source",
                    "type": "`$STRING`",
                    "short": "News source (BBC, TechCrunch, CNN)"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Article headline"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "URL to the full article",
                    "format": "uri"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "bbc"
                                }
                            ],
                            "parts": [
                                "api",
                                "news",
                                "bbc"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "query"
                                ]
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
                    "title": "Author",
                    "type": "`$STRING`",
                    "short": "Article author name"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`",
                    "short": "Article content excerpt"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Brief summary of the article"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the article"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`",
                    "short": "URL to the article's featured image",
                    "format": "uri"
                },
                {
                    "name": "publishedAt",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "short": "Publication date and time",
                    "format": "date-time"
                },
                {
                    "name": "source",
                    "title": "Source",
                    "type": "`$STRING`",
                    "short": "News source (BBC, TechCrunch, CNN)"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Article headline"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "URL to the full article",
                    "format": "uri"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "cnn"
                                }
                            ],
                            "parts": [
                                "api",
                                "news",
                                "cnn"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "query"
                                ]
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
                    "title": "Author",
                    "type": "`$STRING`",
                    "short": "Article author name"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`",
                    "short": "Article content excerpt"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Brief summary of the article"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the article"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`",
                    "short": "URL to the article's featured image",
                    "format": "uri"
                },
                {
                    "name": "publishedAt",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "short": "Publication date and time",
                    "format": "date-time"
                },
                {
                    "name": "source",
                    "title": "Source",
                    "type": "`$STRING`",
                    "short": "News source (BBC, TechCrunch, CNN)"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Article headline"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "URL to the full article",
                    "format": "uri"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "news"
                                }
                            ],
                            "parts": [
                                "api",
                                "news"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "source",
                                        "orig": "source",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "query",
                                    "source"
                                ]
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
                    "title": "Author",
                    "type": "`$STRING`",
                    "short": "Article author name"
                },
                {
                    "name": "content",
                    "title": "Content",
                    "type": "`$STRING`",
                    "short": "Article content excerpt"
                },
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Brief summary of the article"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`",
                    "short": "Unique identifier for the article"
                },
                {
                    "name": "imageUrl",
                    "title": "Image Url",
                    "type": "`$STRING`",
                    "short": "URL to the article's featured image",
                    "format": "uri"
                },
                {
                    "name": "publishedAt",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "short": "Publication date and time",
                    "format": "date-time"
                },
                {
                    "name": "source",
                    "title": "Source",
                    "type": "`$STRING`",
                    "short": "News source (BBC, TechCrunch, CNN)"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Article headline"
                },
                {
                    "name": "url",
                    "title": "Url",
                    "type": "`$STRING`",
                    "short": "URL to the full article",
                    "format": "uri"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
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
                                    "lit": "api"
                                },
                                {
                                    "lit": "news"
                                },
                                {
                                    "lit": "techcrunch"
                                }
                            ],
                            "parts": [
                                "api",
                                "news",
                                "techcrunch"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 10
                                    },
                                    {
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "limit",
                                    "query"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map