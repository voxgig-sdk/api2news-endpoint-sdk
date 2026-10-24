# Api2newsEndpoint SDK utility: prepare_body
require_relative 'media'
module Api2newsEndpointUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return Api2newsEndpointUtilities.raw_body(ctx.reqdata) if Api2newsEndpointUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
