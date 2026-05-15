package = "voxgig-sdk-api2news-endpoint"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/api2news-endpoint-sdk.git"
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
