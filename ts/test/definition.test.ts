import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "bbc",
    "accessor": "Bbc",
    "op": "list",
    "method": "GET",
    "path": "/api/news/bbc",
    "args": [],
    "select": {
      "limit": 10,
      "query": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "success",
      "source": "bbc",
      "totalResults": 1,
      "articles": [
        {
          "id": "x",
          "source": "bbc",
          "title": "Breaking News: Major Technology Breakthrough",
          "description": "x",
          "url": "x",
          "imageUrl": "x",
          "publishedAt": "2026-01-01T00:00:00Z",
          "author": "x",
          "content": "x"
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
      "limit": 10,
      "query": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "success",
      "source": "cnn",
      "totalResults": 1,
      "articles": [
        {
          "id": "x",
          "source": "bbc",
          "title": "Breaking News: Major Technology Breakthrough",
          "description": "x",
          "url": "x",
          "imageUrl": "x",
          "publishedAt": "2026-01-01T00:00:00Z",
          "author": "x",
          "content": "x"
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
      "limit": 10,
      "query": "v1",
      "source": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "source",
      "query",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "query",
        "wire": "query"
      },
      {
        "name": "source",
        "wire": "source"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "success",
      "totalResults": 50,
      "articles": [
        {
          "id": "x",
          "source": "bbc",
          "title": "Breaking News: Major Technology Breakthrough",
          "description": "x",
          "url": "x",
          "imageUrl": "x",
          "publishedAt": "2026-01-01T00:00:00Z",
          "author": "x",
          "content": "x"
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
      "limit": 10,
      "query": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "query",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "query",
        "wire": "query"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "status": "success",
      "source": "techcrunch",
      "totalResults": 1,
      "articles": [
        {
          "id": "x",
          "source": "bbc",
          "title": "Breaking News: Major Technology Breakthrough",
          "description": "x",
          "url": "x",
          "imageUrl": "x",
          "publishedAt": "2026-01-01T00:00:00Z",
          "author": "x",
          "content": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
