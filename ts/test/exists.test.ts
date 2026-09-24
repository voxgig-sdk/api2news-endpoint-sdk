
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { Api2newsEndpointSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = Api2newsEndpointSDK.test()
    equal(testsdk instanceof Api2newsEndpointSDK, true,
      'Api2newsEndpointSDK.test() must return a client synchronously')
  })

})
