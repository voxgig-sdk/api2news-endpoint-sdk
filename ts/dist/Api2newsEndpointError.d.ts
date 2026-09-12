import { Context } from './Context';
declare class Api2newsEndpointError extends Error {
    isApi2newsEndpointError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { Api2newsEndpointError };
