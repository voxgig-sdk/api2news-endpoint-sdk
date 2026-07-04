-- Typed models for the Api2newsEndpoint SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Bbc
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field image_url? string
---@field published_at? string
---@field source? string
---@field title? string
---@field url? string

---@class BbcListMatch

---@class Cnn
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field image_url? string
---@field published_at? string
---@field source? string
---@field title? string
---@field url? string

---@class CnnListMatch

---@class New
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field image_url? string
---@field published_at? string
---@field source? string
---@field title? string
---@field url? string

---@class NewListMatch

---@class Techcrunch
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field image_url? string
---@field published_at? string
---@field source? string
---@field title? string
---@field url? string

---@class TechcrunchListMatch

local M = {}

return M
