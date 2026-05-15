<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: feature_add

class Api2newsEndpointFeatureAdd
{
    public static function call(Api2newsEndpointContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
