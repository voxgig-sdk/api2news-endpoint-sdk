# Api2newsEndpoint SDK utility: make_context

from core.context import Api2newsEndpointContext


def make_context_util(ctxmap, basectx):
    return Api2newsEndpointContext(ctxmap, basectx)
