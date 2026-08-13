<?php
declare(strict_types=1);

// Typed models for the Api2newsEndpoint SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Bbc entity data model. */
class Bbc
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Bbc#list. */
class BbcListMatch
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Cnn entity data model. */
class Cnn
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Cnn#list. */
class CnnListMatch
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** New entity data model. */
class New
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for New#list. */
class NewListMatch
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Techcrunch entity data model. */
class Techcrunch
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Techcrunch#list. */
class TechcrunchListMatch
{
    public ?string $author = null;
    public ?string $content = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $imageUrl = null;
    public ?string $publishedAt = null;
    public ?string $source = null;
    public ?string $title = null;
    public ?string $url = null;
}

