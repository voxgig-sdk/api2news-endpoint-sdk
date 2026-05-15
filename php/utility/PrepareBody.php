<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: prepare_body

class Api2newsEndpointPrepareBody
{
    public static function call(Api2newsEndpointContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
