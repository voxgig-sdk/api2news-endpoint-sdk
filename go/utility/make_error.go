package utility

import "github.com/voxgig-sdk/api2news-endpoint-sdk/go/core"

func makeErrorUtil(ctx *core.Context, err error) (any, error) {
	if ctx == nil {
		ctx = &core.Context{
			Ctrl: &core.Control{},
			Op:   core.NewOperation(map[string]any{}),
		}
	}

	op := ctx.Op
	if op == nil {
		op = core.NewOperation(map[string]any{})
	}
	opname := op.Name
	if opname == "" || opname == "_" {
		opname = "unknown operation"
	}

	result := ctx.Result
	if result == nil {
		result = core.NewResult(map[string]any{})
	}
	result.Ok = false

	if err == nil {
		err = result.Err
	}
	if err == nil {
		err = ctx.MakeError("unknown", "unknown error")
	}

	errmsg := err.Error()
	msg := "Api2newsEndpointSDK: " + opname + ": " + errmsg
	msg = cleanUtil(ctx, msg).(string)

	result.Err = nil

	spec := ctx.Spec

	if ctx.Ctrl.Explain != nil {
		ctx.Ctrl.Explain["err"] = map[string]any{
			"message": msg,
		}
	}

	sdkErr := &core.Api2newsEndpointError{
		IsApi2newsEndpointError: true,
		Sdk:              "Api2newsEndpoint",
		Code:             "",
		Msg:              msg,
		Ctx:              ctx,
		Result:           cleanUtil(ctx, result),
		Spec:             cleanUtil(ctx, spec),
	}
	if se, ok := err.(*core.Api2newsEndpointError); ok {
		sdkErr.Code = se.Code
	}

	ctx.Ctrl.Err = sdkErr

	// Fire PreUnexpected so observability features (metrics, telemetry, audit,
	// debug) close/record error paths that never reach PreDone (e.g. a PrePoint
	// rbac short-circuit). Fires after ctx.Ctrl.Err is set so hooks can read the
	// error; features guard against double-recording when PreDone already fired.
	if ctx.Utility != nil && ctx.Utility.FeatureHook != nil {
		ctx.Utility.FeatureHook(ctx, "PreUnexpected")
	}

	if ctx.Ctrl.Throw != nil && *ctx.Ctrl.Throw == false {
		return result.Resdata, nil
	}

	return nil, sdkErr
}
