<?php
declare(strict_types=1);

// Api2newsEndpoint SDK base feature

class Api2newsEndpointBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(Api2newsEndpointContext $ctx, array $options): void {}
    public function PostConstruct(Api2newsEndpointContext $ctx): void {}
    public function PostConstructEntity(Api2newsEndpointContext $ctx): void {}
    public function SetData(Api2newsEndpointContext $ctx): void {}
    public function GetData(Api2newsEndpointContext $ctx): void {}
    public function GetMatch(Api2newsEndpointContext $ctx): void {}
    public function SetMatch(Api2newsEndpointContext $ctx): void {}
    public function PrePoint(Api2newsEndpointContext $ctx): void {}
    public function PreSpec(Api2newsEndpointContext $ctx): void {}
    public function PreRequest(Api2newsEndpointContext $ctx): void {}
    public function PreResponse(Api2newsEndpointContext $ctx): void {}
    public function PreResult(Api2newsEndpointContext $ctx): void {}
    public function PreDone(Api2newsEndpointContext $ctx): void {}
    public function PreUnexpected(Api2newsEndpointContext $ctx): void {}
}
