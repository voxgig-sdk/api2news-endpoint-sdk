

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { Api2newsEndpointSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('BbcEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when API2NEWS_ENDPOINT_TEST_LIVE=TRUE.
  afterEach(liveDelay('API2NEWS_ENDPOINT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = Api2newsEndpointSDK.test()
    const ent = testsdk.Bbc()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.API2NEWS_ENDPOINT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bbc.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"sh":"Article author name","t":"`$STRING`","key$":"author","index$":0},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"Article content excerpt","t":"`$STRING`","key$":"content","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Brief summary of the article","t":"`$STRING`","key$":"description","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the article","t":"`$STRING`","key$":"id","index$":3},"imageUrl":{"a":true,"fo":"uri","h":"Image Url","n":"imageUrl","r":false,"sh":"URL to the article's featured image","t":"`$STRING`","key$":"imageUrl","index$":4},"publishedAt":{"a":true,"fo":"date-time","h":"Published At","n":"publishedAt","r":false,"sh":"Publication date and time","t":"`$STRING`","key$":"publishedAt","index$":5},"source":{"a":true,"h":"Source","n":"source","r":false,"sh":"News source (BBC, TechCrunch, CNN)","t":"`$STRING`","key$":"source","index$":6},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Article headline","t":"`$STRING`","key$":"title","index$":7},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":false,"sh":"URL to the full article","t":"`$STRING`","key$":"url","index$":8}},"id":{"field":"id","name":"id"},"name":"bbc","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/news/bbc","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/news/bbc","q":{"exist":["limit","query"]},"r":{},"s":[{"lit":"api"},{"lit":"news"},{"lit":"bbc"}],"t":{"req":"`reqdata`","res":"`body.articles`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"bbc","name__orig":"bbc","Name":"Bbc","name_":"bbc","name-":"bbc","NAME":"BBC","index$":0}, {"active":true,"entity":"bbc","key$":"BasicBbcFlow","kind":"basic","name":"BasicBbcFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"bbc_ref01"}}],"index$":0}]}, 'Bbc', {"GET /api/news/bbc":{"protocol":"http","parameters":[{"name":"query","in":"query","description":"Search query to filter BBC articles","required":false,"schema":{"type":"string"},"index$":0},{"name":"limit","in":"query","description":"Number of articles to return","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":10},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bbc_ref01_data = Object.values(setup.data.existing.bbc)[0] as any

    // LIST
    const bbc_ref01_ent = client.Bbc()
    const bbc_ref01_match: any = {}

    const bbc_ref01_list = (await bbc_ref01_ent.list(bbc_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bbc/BbcTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = Api2newsEndpointSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['bbc01','bbc02','bbc03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'API2NEWS_ENDPOINT_TEST_BBC_ENTID': idmap,
    'API2NEWS_ENDPOINT_TEST_LIVE': 'FALSE',
    'API2NEWS_ENDPOINT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['API2NEWS_ENDPOINT_TEST_BBC_ENTID']

  const live = 'TRUE' === env.API2NEWS_ENDPOINT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['API2NEWS_ENDPOINT_TEST_BBC_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new Api2newsEndpointSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.API2NEWS_ENDPOINT_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
