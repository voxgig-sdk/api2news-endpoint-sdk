"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
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
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
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
                    "format": "uri",
                    "name": "imageUrl",
                    "short": "URL to the article's featured image",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
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
                    "format": "uri",
                    "name": "url",
                    "short": "URL to the full article",
                    "type": "`$STRING`"
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
                            "select": {
                                "exist": [
                                    "limit",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "parts": [
                                "api",
                                "news",
                                "bbc"
                            ]
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
                    "format": "uri",
                    "name": "imageUrl",
                    "short": "URL to the article's featured image",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
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
                    "format": "uri",
                    "name": "url",
                    "short": "URL to the full article",
                    "type": "`$STRING`"
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
                            "select": {
                                "exist": [
                                    "limit",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "parts": [
                                "api",
                                "news",
                                "cnn"
                            ]
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
                    "format": "uri",
                    "name": "imageUrl",
                    "short": "URL to the article's featured image",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
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
                    "format": "uri",
                    "name": "url",
                    "short": "URL to the full article",
                    "type": "`$STRING`"
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
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "news"
                                }
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
                            },
                            "parts": [
                                "api",
                                "news"
                            ]
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
                    "format": "uri",
                    "name": "imageUrl",
                    "short": "URL to the article's featured image",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
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
                    "format": "uri",
                    "name": "url",
                    "short": "URL to the full article",
                    "type": "`$STRING`"
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
                            "select": {
                                "exist": [
                                    "limit",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.articles`"
                            },
                            "parts": [
                                "api",
                                "news",
                                "techcrunch"
                            ]
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