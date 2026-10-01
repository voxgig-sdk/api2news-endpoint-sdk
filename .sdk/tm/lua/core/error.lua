-- Api2newsEndpoint SDK error

local json = require("dkjson")

local Api2newsEndpointError = {}
Api2newsEndpointError.__index = Api2newsEndpointError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function Api2newsEndpointError.new(code, msg, ctx)
  local self = setmetatable({}, Api2newsEndpointError)
  self.is_sdk_error = true
  self.sdk = "Api2newsEndpoint"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function Api2newsEndpointError:context()
  return CONTEXT[self]
end


function Api2newsEndpointError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function Api2newsEndpointError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function Api2newsEndpointError:to_json()
  return json.encode(self:to_table())
end


function Api2newsEndpointError:__tostring()
  return self.msg
end


function Api2newsEndpointError.__tojson(self)
  return self:to_json()
end


return Api2newsEndpointError
