# Api2newsEndpoint SDK feature factory

from feature.base_feature import Api2newsEndpointBaseFeature
from feature.test_feature import Api2newsEndpointTestFeature


def _make_feature(name):
    features = {
        "base": lambda: Api2newsEndpointBaseFeature(),
        "test": lambda: Api2newsEndpointTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
