"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api2newsEndpointError = void 0;
class Api2newsEndpointError extends Error {
    isApi2newsEndpointError = true;
    sdk = 'Api2newsEndpoint';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.Api2newsEndpointError = Api2newsEndpointError;
//# sourceMappingURL=Api2newsEndpointError.js.map