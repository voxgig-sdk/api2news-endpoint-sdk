import { Api2newsEndpointEntityBase } from '../Api2newsEndpointEntityBase';
import type { Api2newsEndpointSDK } from '../Api2newsEndpointSDK';
import type { Control } from '../types';
import type { Cnn, CnnListMatch } from '../Api2newsEndpointTypes';
declare class CnnEntity extends Api2newsEndpointEntityBase<Cnn> {
    constructor(client: Api2newsEndpointSDK, entopts: any);
    make(this: CnnEntity): CnnEntity;
    list(this: any, reqmatch?: CnnListMatch, ctrl?: Control): Promise<CnnEntity[]>;
}
export { CnnEntity };
