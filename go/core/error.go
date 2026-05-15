package core

type Api2newsEndpointError struct {
	IsApi2newsEndpointError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewApi2newsEndpointError(code string, msg string, ctx *Context) *Api2newsEndpointError {
	return &Api2newsEndpointError{
		IsApi2newsEndpointError: true,
		Sdk:              "Api2newsEndpoint",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *Api2newsEndpointError) Error() string {
	return e.Msg
}
