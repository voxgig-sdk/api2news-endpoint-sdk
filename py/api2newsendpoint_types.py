# Typed models for the Api2newsEndpoint SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Bbc:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class BbcListMatch:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Cnn:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class CnnListMatch:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class New:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class NewListMatch:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class Techcrunch:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None


@dataclass
class TechcrunchListMatch:
    author: Optional[str] = None
    content: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    published_at: Optional[str] = None
    source: Optional[str] = None
    title: Optional[str] = None
    url: Optional[str] = None

