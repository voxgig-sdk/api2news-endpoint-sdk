-- Api2newsEndpoint SDK exists test

local sdk = require("api2news-endpoint_sdk")

describe("Api2newsEndpointSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
