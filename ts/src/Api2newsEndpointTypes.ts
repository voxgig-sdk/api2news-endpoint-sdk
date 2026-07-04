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
  image_url?: string
  published_at?: string
  source?: string
  title?: string
  url?: string
}

export type BbcListMatch = Partial<Bbc>

export interface Cnn {
  author?: string
  content?: string
  description?: string
  id?: string
  image_url?: string
  published_at?: string
  source?: string
  title?: string
  url?: string
}

export type CnnListMatch = Partial<Cnn>

export interface New {
  author?: string
  content?: string
  description?: string
  id?: string
  image_url?: string
  published_at?: string
  source?: string
  title?: string
  url?: string
}

export type NewListMatch = Partial<New>

export interface Techcrunch {
  author?: string
  content?: string
  description?: string
  id?: string
  image_url?: string
  published_at?: string
  source?: string
  title?: string
  url?: string
}

export type TechcrunchListMatch = Partial<Techcrunch>

