<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: result_body

class Api2newsEndpointResultBody
{
    public static function call(Api2newsEndpointContext $ctx): ?Api2newsEndpointResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
