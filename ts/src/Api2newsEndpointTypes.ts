// Typed models for the Api2newsEndpoint SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Bbc {
  author?: string
  content?: string
  description?: string
  id?: string
  imageUrl?: string
  publishedAt?: string
  source?: string
  title?: string
  url?: string
}

export interface BbcListMatch {
  limit?: number
  query?: string
}

export interface Cnn {
  author?: string
  content?: string
  description?: string
  id?: string
  imageUrl?: string
  publishedAt?: string
  source?: string
  title?: string
  url?: string
}

export interface CnnListMatch {
  limit?: number
  query?: string
}

export interface New {
  author?: string
  content?: string
  description?: string
  id?: string
  imageUrl?: string
  publishedAt?: string
  source?: string
  title?: string
  url?: string
}

export interface NewListMatch {
  limit?: number
  query?: string
  source?: string
}

export interface Techcrunch {
  author?: string
  content?: string
  description?: string
  id?: string
  imageUrl?: string
  publishedAt?: string
  source?: string
  title?: string
  url?: string
}

export interface TechcrunchListMatch {
  limit?: number
  query?: string
}

