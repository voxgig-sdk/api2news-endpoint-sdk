import { BbcEntity } from './entity/BbcEntity';
import { CnnEntity } from './entity/CnnEntity';
import { NewEntity } from './entity/NewEntity';
import { TechcrunchEntity } from './entity/TechcrunchEntity';
export type * from './Api2newsEndpointTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { Api2newsEndpointEntityBase } from './Api2newsEndpointEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class Api2newsEndpointSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Bbc(entopts?: Record<string, any>): BbcEntity;
    Cnn(entopts?: Record<string, any>): CnnEntity;
    New(entopts?: Record<string, any>): NewEntity;
    Techcrunch(entopts?: Record<string, any>): TechcrunchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): Api2newsEndpointSDK;
    tester(testopts?: any, sdkopts?: any): Api2newsEndpointSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof Api2newsEndpointSDK;
export { stdutil, config, BaseFeature, Api2newsEndpointEntityBase, Api2newsEndpointSDK, SDK, };
