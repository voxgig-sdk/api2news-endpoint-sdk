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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Match filter for Bbc#list (any subset of Bbc fields).
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
BbcListMatch = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Match filter for Cnn#list (any subset of Cnn fields).
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
CnnListMatch = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Match filter for New#list (any subset of New fields).
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
NewListMatch = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

# Match filter for Techcrunch#list (any subset of Techcrunch fields).
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
# @!attribute [rw] image_url
#   @return [String, nil]
#
# @!attribute [rw] published_at
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
TechcrunchListMatch = Struct.new(
  :author,
  :content,
  :description,
  :id,
  :image_url,
  :published_at,
  :source,
  :title,
  :url,
  keyword_init: true
)

