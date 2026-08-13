# Api2newsEndpoint SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

Api2newsEndpointUtility.registrar = ->(u) {
  u.clean = Api2newsEndpointUtilities::Clean
  u.done = Api2newsEndpointUtilities::Done
  u.make_error = Api2newsEndpointUtilities::MakeError
  u.feature_add = Api2newsEndpointUtilities::FeatureAdd
  u.feature_hook = Api2newsEndpointUtilities::FeatureHook
  u.feature_init = Api2newsEndpointUtilities::FeatureInit
  u.fetcher = Api2newsEndpointUtilities::Fetcher
  u.make_fetch_def = Api2newsEndpointUtilities::MakeFetchDef
  u.make_context = Api2newsEndpointUtilities::MakeContext
  u.make_options = Api2newsEndpointUtilities::MakeOptions
  u.make_request = Api2newsEndpointUtilities::MakeRequest
  u.make_response = Api2newsEndpointUtilities::MakeResponse
  u.make_result = Api2newsEndpointUtilities::MakeResult
  u.make_point = Api2newsEndpointUtilities::MakePoint
  u.make_spec = Api2newsEndpointUtilities::MakeSpec
  u.make_url = Api2newsEndpointUtilities::MakeUrl
  u.param = Api2newsEndpointUtilities::Param
  u.prepare_auth = Api2newsEndpointUtilities::PrepareAuth
  u.prepare_body = Api2newsEndpointUtilities::PrepareBody
  u.prepare_headers = Api2newsEndpointUtilities::PrepareHeaders
  u.prepare_method = Api2newsEndpointUtilities::PrepareMethod
  u.prepare_params = Api2newsEndpointUtilities::PrepareParams
  u.prepare_path = Api2newsEndpointUtilities::PreparePath
  u.prepare_query = Api2newsEndpointUtilities::PrepareQuery
  u.graphql_body = Api2newsEndpointUtilities::GraphqlBody
  u.graphql_errors = Api2newsEndpointUtilities::GraphqlErrors
  u.result_basic = Api2newsEndpointUtilities::ResultBasic
  u.result_body = Api2newsEndpointUtilities::ResultBody
  u.result_headers = Api2newsEndpointUtilities::ResultHeaders
  u.transform_request = Api2newsEndpointUtilities::TransformRequest
  u.transform_response = Api2newsEndpointUtilities::TransformResponse
}
