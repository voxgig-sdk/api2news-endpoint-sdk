# Api2newsEndpoint SDK utility: make_context
require_relative '../core/context'
module Api2newsEndpointUtilities
  MakeContext = ->(ctxmap, basectx) {
    Api2newsEndpointContext.new(ctxmap, basectx)
  }
end
