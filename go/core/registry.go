package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBbcEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

var NewCnnEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

var NewNewEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

var NewTechcrunchEntityFunc func(client *Api2newsEndpointSDK, entopts map[string]any) Api2newsEndpointEntity

