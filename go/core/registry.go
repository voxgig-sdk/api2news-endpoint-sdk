package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewBbcEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

var NewCnnEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

var NewNewEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

var NewTechcrunchEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

