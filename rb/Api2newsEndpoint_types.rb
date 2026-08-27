# frozen_string_literal: true

# Typed models for the Api2newsEndpoint SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Bbc entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] publishedAt
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Bbc = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :imageUrl,
  :publishedAt,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Bbc#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
BbcListMatch = Struct.new(
  :limit,
  :query,
  keyword_init: true
)

# Cnn entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] publishedAt
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Cnn = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :imageUrl,
  :publishedAt,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Cnn#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
CnnListMatch = Struct.new(
  :limit,
  :query,
  keyword_init: true
)

# New entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] publishedAt
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
New = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :imageUrl,
  :publishedAt,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Request payload for New#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
NewListMatch = Struct.new(
  :limit,
  :query,
  :source,
  keyword_init: true
)

# Techcrunch entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] publishedAt
#   @return [String, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Techcrunch = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :imageUrl,
  :publishedAt,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Techcrunch#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
TechcrunchListMatch = Struct.new(
  :limit,
  :query,
  keyword_init: true
)

