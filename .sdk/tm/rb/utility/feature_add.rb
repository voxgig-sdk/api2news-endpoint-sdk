# Api2newsEndpoint SDK utility: feature_add
module Api2newsEndpointUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
