# Api2newsEndpoint SDK utility: prepare_body
module Api2newsEndpointUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
