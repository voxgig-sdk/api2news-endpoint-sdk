import { Api2newsEndpointEntityBase } from '../Api2newsEndpointEntityBase';
import type { Api2newsEndpointSDK } from '../Api2newsEndpointSDK';
import type { Control } from '../types';
import type { New, NewListMatch } from '../Api2newsEndpointTypes';
declare class NewEntity extends Api2newsEndpointEntityBase<New> {
    constructor(client: Api2newsEndpointSDK, entopts: any);
    make(this: NewEntity): NewEntity;
    list(this: any, reqmatch?: NewListMatch, ctrl?: Control): Promise<NewEntity[]>;
}
export { NewEntity };
