package traceability

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"traceability/x/traceability/keeper"
	"traceability/x/traceability/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the traceinfo
	for _, elem := range genState.TraceinfoList {
		k.SetTraceinfo(ctx, elem)
	}

	// Set traceinfo count
	k.SetTraceinfoCount(ctx, genState.TraceinfoCount)
	// Set all the phtraceinfo
for _, elem := range genState.PhtraceinfoList {
	k.SetPhtraceinfo(ctx, elem)
}

// Set phtraceinfo count
k.SetPhtraceinfoCount(ctx, genState.PhtraceinfoCount)
// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.TraceinfoList = k.GetAllTraceinfo(ctx)
	genesis.TraceinfoCount = k.GetTraceinfoCount(ctx)
	genesis.PhtraceinfoList = k.GetAllPhtraceinfo(ctx)
genesis.PhtraceinfoCount = k.GetPhtraceinfoCount(ctx)
// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
