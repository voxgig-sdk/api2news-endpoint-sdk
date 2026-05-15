<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: prepare_headers

class Api2newsEndpointPrepareHeaders
{
    public static function call(Api2newsEndpointContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
