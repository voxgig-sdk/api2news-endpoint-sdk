"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CnnEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when API2NEWS_ENDPOINT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('API2NEWS_ENDPOINT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.Api2newsEndpointSDK.test();
        const ent = testsdk.Cnn();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.API2NEWS_ENDPOINT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'cnn.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "Article author name", "t": "`$STRING`", "key$": "author", "index$": 0 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "Article content excerpt", "t": "`$STRING`", "key$": "content", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Brief summary of the article", "t": "`$STRING`", "key$": "description", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the article", "t": "`$STRING`", "key$": "id", "index$": 3 }, "imageUrl": { "a": true, "fo": "uri", "h": "Image Url", "n": "imageUrl", "r": false, "sh": "URL to the article's featured image", "t": "`$STRING`", "key$": "imageUrl", "index$": 4 }, "publishedAt": { "a": true, "fo": "date-time", "h": "Published At", "n": "publishedAt", "r": false, "sh": "Publication date and time", "t": "`$STRING`", "key$": "publishedAt", "index$": 5 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "sh": "News source (BBC, TechCrunch, CNN)", "t": "`$STRING`", "key$": "source", "index$": 6 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Article headline", "t": "`$STRING`", "key$": "title", "index$": 7 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "URL to the full article", "t": "`$STRING`", "key$": "url", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "cnn", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/news/cnn", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/news/cnn", "q": { "exist": ["limit", "query"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "news" }, { "lit": "cnn" }], "t": { "req": "`reqdata`", "res": "`body.articles`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "cnn", "name__orig": "cnn", "Name": "Cnn", "name_": "cnn", "name-": "cnn", "NAME": "CNN", "index$": 1 }, { "active": true, "entity": "cnn", "key$": "BasicCnnFlow", "kind": "basic", "name": "BasicCnnFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "cnn_ref01" } }], "index$": 0 }] }, 'Cnn', { "GET /api/news/cnn": { "protocol": "http", "parameters": [{ "name": "query", "in": "query", "description": "Search query to filter CNN articles", "required": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "limit", "in": "query", "description": "Number of articles to return", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 10 }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let cnn_ref01_data = Object.values(setup.data.existing.cnn)[0];
        // LIST
        const cnn_ref01_ent = client.Cnn();
        const cnn_ref01_match = {};
        const cnn_ref01_list = (await cnn_ref01_ent.list(cnn_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/cnn/CnnTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.Api2newsEndpointSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['cnn01', 'cnn02', 'cnn03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'API2NEWS_ENDPOINT_TEST_CNN_ENTID': idmap,
        'API2NEWS_ENDPOINT_TEST_LIVE': 'FALSE',
        'API2NEWS_ENDPOINT_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['API2NEWS_ENDPOINT_TEST_CNN_ENTID'];
    const live = 'TRUE' === env.API2NEWS_ENDPOINT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['API2NEWS_ENDPOINT_TEST_CNN_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.Api2newsEndpointSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=CnnEntity.test.js.map