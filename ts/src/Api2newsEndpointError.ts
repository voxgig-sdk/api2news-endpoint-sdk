
import { Context } from './Context'


class Api2newsEndpointError extends Error {

  isApi2newsEndpointError = true

  sdk = 'Api2newsEndpoint'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  Api2newsEndpointError
}

