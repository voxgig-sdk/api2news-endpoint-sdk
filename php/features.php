<?php
declare(strict_types=1);

// Api2newsEndpoint SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class Api2newsEndpointFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new Api2newsEndpointBaseFeature();
            case "test":
                return new Api2newsEndpointTestFeature();
            default:
                return new Api2newsEndpointBaseFeature();
        }
    }
}
