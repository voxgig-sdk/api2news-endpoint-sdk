<?php
declare(strict_types=1);

// Api2newsEndpoint SDK utility: prepare_path

class Api2newsEndpointPreparePath
{
    public static function call(Api2newsEndpointContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
