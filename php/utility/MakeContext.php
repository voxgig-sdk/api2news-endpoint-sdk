<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class Api2newsEndpointMakeContext
{
    public static function call(array $ctxmap, ?Api2newsEndpointContext $basectx): Api2newsEndpointContext
    {
        return new Api2newsEndpointContext($ctxmap, $basectx);
    }
}
