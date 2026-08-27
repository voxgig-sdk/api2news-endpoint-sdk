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
---@field imageUrl? string
---@field publishedAt? string
---@field source? string
---@field title? string
---@field url? string

---@class BbcListMatch
---@field limit? number
---@field query? string

---@class Cnn
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field imageUrl? string
---@field publishedAt? string
---@field source? string
---@field title? string
---@field url? string

---@class CnnListMatch
---@field limit? number
---@field query? string

---@class New
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field imageUrl? string
---@field publishedAt? string
---@field source? string
---@field title? string
---@field url? string

---@class NewListMatch
---@field limit? number
---@field query? string
---@field source? string

---@class Techcrunch
---@field author? string
---@field content? string
---@field description? string
---@field id? string
---@field imageUrl? string
---@field publishedAt? string
---@field source? string
---@field title? string
---@field url? string

---@class TechcrunchListMatch
---@field limit? number
---@field query? string

local M = {}

return M
