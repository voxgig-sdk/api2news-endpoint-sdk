<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: feature_hook

class Api2newsEndpointFeatureHook
{
    public static function call(Api2newsEndpointContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
