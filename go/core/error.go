package core

import "encoding/json"

type Api2newsEndpointError struct {
	IsApi2newsEndpointError bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewApi2newsEndpointError(code string, msg string, ctx *Context) *Api2newsEndpointError {
	return &Api2newsEndpointError{
		IsApi2newsEndpointError: true,
		Sdk:                "Api2newsEndpoint",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *Api2newsEndpointError) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *Api2newsEndpointError) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *Api2newsEndpointError) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
