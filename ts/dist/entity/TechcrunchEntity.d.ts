import { Api2newsEndpointEntityBase } from '../Api2newsEndpointEntityBase';
import type { Api2newsEndpointSDK } from '../Api2newsEndpointSDK';
import type { Control } from '../types';
import type { Techcrunch, TechcrunchListMatch } from '../Api2newsEndpointTypes';
declare class TechcrunchEntity extends Api2newsEndpointEntityBase<Techcrunch> {
    constructor(client: Api2newsEndpointSDK, entopts: any);
    make(this: TechcrunchEntity): TechcrunchEntity;
    list(this: any, reqmatch?: TechcrunchListMatch, ctrl?: Control): Promise<TechcrunchEntity[]>;
}
export { TechcrunchEntity };
