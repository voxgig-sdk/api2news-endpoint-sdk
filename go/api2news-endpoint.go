package voxgigapi2newsendpointsdk

import (
	"github.com/voxgig-sdk/api2news-endpoint-sdk/go/core"
	"github.com/voxgig-sdk/api2news-endpoint-sdk/go/entity"
	"github.com/voxgig-sdk/api2news-endpoint-sdk/go/feature"
	_ "github.com/voxgig-sdk/api2news-endpoint-sdk/go/utility"
)

// Type aliases preserve external API.
type Api2newsEndpointSDK = core.Api2newsEndpointSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type Api2newsEndpointEntity = core.Api2newsEndpointEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type Api2newsEndpointError = core.Api2newsEndpointError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBbcEntityFunc = func(client *core.Api2newsEndpointSDK, entopts map[string]any) core.Api2newsEndpointEntity {
		return entity.NewBbcEntity(client, entopts)
	}
	core.NewCnnEntityFunc = func(client *core.Api2newsEndpointSDK, entopts map[string]any) core.Api2newsEndpointEntity {
		return entity.NewCnnEntity(client, entopts)
	}
	core.NewNewEntityFunc = func(client *core.Api2newsEndpointSDK, entopts map[string]any) core.Api2newsEndpointEntity {
		return entity.NewNewEntity(client, entopts)
	}
	core.NewTechcrunchEntityFunc = func(client *core.Api2newsEndpointSDK, entopts map[string]any) core.Api2newsEndpointEntity {
		return entity.NewTechcrunchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewApi2newsEndpointSDK = core.NewApi2newsEndpointSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
