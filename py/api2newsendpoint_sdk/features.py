# Api2newsEndpoint SDK feature factory

from api2newsendpoint_sdk.feature.base_feature import Api2newsEndpointBaseFeature
from api2newsendpoint_sdk.feature.ratelimit_feature import Api2newsEndpointRatelimitFeature
from api2newsendpoint_sdk.feature.retry_feature import Api2newsEndpointRetryFeature
from api2newsendpoint_sdk.feature.test_feature import Api2newsEndpointTestFeature
from api2newsendpoint_sdk.feature.timeout_feature import Api2newsEndpointTimeoutFeature


_FEATURES = {
    "base": lambda: Api2newsEndpointBaseFeature(),
    "ratelimit": lambda: Api2newsEndpointRatelimitFeature(),
    "retry": lambda: Api2newsEndpointRetryFeature(),
    "test": lambda: Api2newsEndpointTestFeature(),
    "timeout": lambda: Api2newsEndpointTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
