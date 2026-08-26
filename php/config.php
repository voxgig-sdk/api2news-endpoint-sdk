<?php
declare(strict_types=1);

// Api2newsEndpoint SDK configuration

class Api2newsEndpointConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Api2newsEndpoint",
                "slug" => "api2news-endpoint",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api2news.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "bbc" => [],
                    "cnn" => [],
                    "new" => [],
                    "techcrunch" => [],
                ],
            ],
            "entity" => [
        'bbc' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Article author name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'short' => 'Article content excerpt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Brief summary of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'short' => 'URL to the article\'s featured image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'publishedAt',
              'short' => 'Publication date and time',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'News source (BBC, TechCrunch, CNN)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Article headline',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to the full article',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'bbc',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/news/bbc',
                  'parts' => [
                    'api',
                    'news',
                    'bbc',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.articles`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'cnn' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Article author name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'short' => 'Article content excerpt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Brief summary of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'short' => 'URL to the article\'s featured image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'publishedAt',
              'short' => 'Publication date and time',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'News source (BBC, TechCrunch, CNN)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Article headline',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to the full article',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'cnn',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/news/cnn',
                  'parts' => [
                    'api',
                    'news',
                    'cnn',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.articles`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'new' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Article author name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'short' => 'Article content excerpt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Brief summary of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'short' => 'URL to the article\'s featured image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'publishedAt',
              'short' => 'Publication date and time',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'News source (BBC, TechCrunch, CNN)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Article headline',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to the full article',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'new',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'source',
                        'orig' => 'source',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/news',
                  'parts' => [
                    'api',
                    'news',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'query',
                      'source',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.articles`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'techcrunch' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Article author name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'short' => 'Article content excerpt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Brief summary of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'imageUrl',
              'short' => 'URL to the article\'s featured image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'publishedAt',
              'short' => 'Publication date and time',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'News source (BBC, TechCrunch, CNN)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Article headline',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to the full article',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'techcrunch',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/news/techcrunch',
                  'parts' => [
                    'api',
                    'news',
                    'techcrunch',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.articles`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return Api2newsEndpointFeatures::make_feature($name);
    }
}
