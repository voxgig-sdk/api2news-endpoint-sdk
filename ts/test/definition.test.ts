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
