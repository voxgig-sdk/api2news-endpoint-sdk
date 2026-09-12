import { Api2newsEndpointEntityBase } from '../Api2newsEndpointEntityBase';
import type { Api2newsEndpointSDK } from '../Api2newsEndpointSDK';
import type { Control } from '../types';
import type { Bbc, BbcListMatch } from '../Api2newsEndpointTypes';
declare class BbcEntity extends Api2newsEndpointEntityBase<Bbc> {
    constructor(client: Api2newsEndpointSDK, entopts: any);
    make(this: BbcEntity): BbcEntity;
    list(this: any, reqmatch?: BbcListMatch, ctrl?: Control): Promise<BbcEntity[]>;
}
export { BbcEntity };
