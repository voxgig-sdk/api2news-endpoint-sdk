# ProjectName SDK exists test

import pytest
from api2newsendpoint_sdk import Api2newsEndpointSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = Api2newsEndpointSDK.test(None, None)
        assert testsdk is not None
