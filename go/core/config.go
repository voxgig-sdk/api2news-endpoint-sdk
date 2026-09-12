package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Api2newsEndpoint",
			"slug": "api2news-endpoint",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api2news.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"bbc": map[string]any{},
				"cnn": map[string]any{},
				"new": map[string]any{},
				"techcrunch": map[string]any{},
			},
		},
		"entity": map[string]any{
			"bbc": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Article author name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"short": "Article content excerpt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Brief summary of the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "imageUrl",
						"short": "URL to the article's featured image",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "publishedAt",
						"short": "Publication date and time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "News source (BBC, TechCrunch, CNN)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Article headline",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"short": "URL to the full article",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bbc",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/news/bbc",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "bbc",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.articles`",
								},
								"parts": []any{
									"api",
									"news",
									"bbc",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"cnn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Article author name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"short": "Article content excerpt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Brief summary of the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "imageUrl",
						"short": "URL to the article's featured image",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "publishedAt",
						"short": "Publication date and time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "News source (BBC, TechCrunch, CNN)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Article headline",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"short": "URL to the full article",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "cnn",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/news/cnn",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "cnn",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.articles`",
								},
								"parts": []any{
									"api",
									"news",
									"cnn",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"new": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Article author name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"short": "Article content excerpt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Brief summary of the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "imageUrl",
						"short": "URL to the article's featured image",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "publishedAt",
						"short": "Publication date and time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "News source (BBC, TechCrunch, CNN)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Article headline",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"short": "URL to the full article",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "new",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "source",
											"orig": "source",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/news",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "news",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"query",
										"source",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.articles`",
								},
								"parts": []any{
									"api",
									"news",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"techcrunch": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"short": "Article author name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"short": "Article content excerpt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Brief summary of the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the article",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "imageUrl",
						"short": "URL to the article's featured image",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "publishedAt",
						"short": "Publication date and time",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "News source (BBC, TechCrunch, CNN)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Article headline",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"short": "URL to the full article",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "techcrunch",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/news/techcrunch",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "news",
									},
									map[string]any{
										"lit": "techcrunch",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.articles`",
								},
								"parts": []any{
									"api",
									"news",
									"techcrunch",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
