<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: result_headers

class Api2newsEndpointResultHeaders
{
    public static function call(Api2newsEndpointContext $ctx): ?Api2newsEndpointResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
