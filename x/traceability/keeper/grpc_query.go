package keeper

import (
	"traceability/x/traceability/types"
)

var _ types.QueryServer = Keeper{}
