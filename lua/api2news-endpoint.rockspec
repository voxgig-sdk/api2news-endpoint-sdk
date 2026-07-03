package = "voxgig-sdk-api2news-endpoint"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/api2news-endpoint-sdk.git",
  tag = "lua/v0.0.1",
  dir = "api2news-endpoint-sdk/lua"
}
description = {
  summary = "Unofficial generated Lua SDK for the API2NEWS Endpoint public API. Not affiliated with or endorsed by the upstream API provider.",
  homepage = "https://github.com/voxgig-sdk/api2news-endpoint-sdk",
  issues_url = "https://github.com/voxgig-sdk/api2news-endpoint-sdk/issues",
  license = "MIT",
  labels = { "voxgig", "sdk", "generated-sdk", "openapi", "api-client", "api2news-endpoint" }
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["api2news-endpoint_sdk"] = "api2news-endpoint_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
