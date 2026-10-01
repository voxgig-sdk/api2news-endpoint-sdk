"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "bbc",
        "accessor": "Bbc",
        "op": "list",
        "method": "GET",
        "path": "/api/news/bbc",
        "args": [],
        "select": {
            "limit": "v1",
            "query": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "limit"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "source": "bbc",
            "totalResults": 1,
            "articles": [
                {
                    "author": "x",
                    "content": "x",
                    "description": "x",
                    "id": "x",
                    "imageUrl": "x",
                    "publishedAt": "2026-01-01T00:00:00Z",
                    "source": "bbc",
                    "title": "Breaking News: Major Technology Breakthrough",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "cnn",
        "accessor": "Cnn",
        "op": "list",
        "method": "GET",
        "path": "/api/news/cnn",
        "args": [],
        "select": {
            "limit": "v1",
            "query": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "limit"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "source": "cnn",
            "totalResults": 1,
            "articles": [
                {
                    "author": "x",
                    "content": "x",
                    "description": "x",
                    "id": "x",
                    "imageUrl": "x",
                    "publishedAt": "2026-01-01T00:00:00Z",
                    "source": "bbc",
                    "title": "Breaking News: Major Technology Breakthrough",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "new",
        "accessor": "New",
        "op": "list",
        "method": "GET",
        "path": "/api/news",
        "args": [],
        "select": {
            "limit": "v1",
            "query": "v1",
            "source": "v1"
        },
        "headers": [],
        "query": [
            "source",
            "query",
            "limit"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "totalResults": 50,
            "articles": [
                {
                    "author": "x",
                    "content": "x",
                    "description": "x",
                    "id": "x",
                    "imageUrl": "x",
                    "publishedAt": "2026-01-01T00:00:00Z",
                    "source": "bbc",
                    "title": "Breaking News: Major Technology Breakthrough",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "techcrunch",
        "accessor": "Techcrunch",
        "op": "list",
        "method": "GET",
        "path": "/api/news/techcrunch",
        "args": [],
        "select": {
            "limit": "v1",
            "query": "v1"
        },
        "headers": [],
        "query": [
            "query",
            "limit"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "source": "techcrunch",
            "totalResults": 1,
            "articles": [
                {
                    "author": "x",
                    "content": "x",
                    "description": "x",
                    "id": "x",
                    "imageUrl": "x",
                    "publishedAt": "2026-01-01T00:00:00Z",
                    "source": "bbc",
                    "title": "Breaking News: Major Technology Breakthrough",
                    "url": "x"
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map