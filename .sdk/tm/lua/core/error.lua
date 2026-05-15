-- Api2newsEndpoint SDK error

local Api2newsEndpointError = {}
Api2newsEndpointError.__index = Api2newsEndpointError


function Api2newsEndpointError.new(code, msg, ctx)
  local self = setmetatable({}, Api2newsEndpointError)
  self.is_sdk_error = true
  self.sdk = "Api2newsEndpoint"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function Api2newsEndpointError:error()
  return self.msg
end


function Api2newsEndpointError:__tostring()
  return self.msg
end


return Api2newsEndpointError
