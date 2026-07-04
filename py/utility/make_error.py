# Api2newsEndpoint SDK utility: make_error

from __future__ import annotations
from core.operation import Api2newsEndpointOperation
from core.result import Api2newsEndpointResult
from core.control import Api2newsEndpointControl
from core.error import Api2newsEndpointError


def make_error_util(ctx, err):
    if ctx is None:
        from core.context import Api2newsEndpointContext
        ctx = Api2newsEndpointContext({}, None)

    op = ctx.op
    if op is None:
        op = Api2newsEndpointOperation({})
    opname = op.name
    if opname == "" or opname == "_":
        opname = "unknown operation"

    result = ctx.result
    if result is None:
        result = Api2newsEndpointResult({})
    result.ok = False

    if err is None:
        err = result.err
    if err is None:
        err = ctx.make_error("unknown", "unknown error")

    errmsg = ""
    if isinstance(err, Api2newsEndpointError):
        errmsg = err.msg
    elif hasattr(err, "msg") and err.msg is not None:
        errmsg = err.msg
    elif isinstance(err, str):
        errmsg = err
    else:
        errmsg = str(err)

    msg = "Api2newsEndpointSDK: " + opname + ": " + errmsg
    msg = ctx.utility.clean(ctx, msg)

    result.err = None

    spec = ctx.spec

    if ctx.ctrl.explain is not None:
        ctx.ctrl.explain["err"] = {"message": msg}

    sdk_err = Api2newsEndpointError("", msg, ctx)
    sdk_err.result = ctx.utility.clean(ctx, result)
    sdk_err.spec = ctx.utility.clean(ctx, spec)

    if isinstance(err, Api2newsEndpointError):
        sdk_err.code = err.code

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err is False:
        return result.resdata

    raise sdk_err
