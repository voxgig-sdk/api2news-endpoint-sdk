# Api2newsEndpoint SDK exists test

require "minitest/autorun"
require_relative "../Api2newsEndpoint_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = Api2newsEndpointSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
