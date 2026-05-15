# Api2newsEndpoint SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module Api2newsEndpointFeatures
  def self.make_feature(name)
    case name
    when "base"
      Api2newsEndpointBaseFeature.new
    when "test"
      Api2newsEndpointTestFeature.new
    else
      Api2newsEndpointBaseFeature.new
    end
  end
end
