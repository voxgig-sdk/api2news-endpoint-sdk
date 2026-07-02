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
  summary = "Api2newsEndpoint SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
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
