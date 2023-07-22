package traceability_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "traceability/testutil/keeper"
	"traceability/testutil/nullify"
	"traceability/x/traceability"
	"traceability/x/traceability/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		TraceinfoList: []types.Traceinfo{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		TraceinfoCount: 2,
		PhtraceinfoList: []types.Phtraceinfo{
		{
			Id: 0,
		},
		{
			Id: 1,
		},
	},
	PhtraceinfoCount: 2,
	// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TraceabilityKeeper(t)
	traceability.InitGenesis(ctx, *k, genesisState)
	got := traceability.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.TraceinfoList, got.TraceinfoList)
	require.Equal(t, genesisState.TraceinfoCount, got.TraceinfoCount)
	require.ElementsMatch(t, genesisState.PhtraceinfoList, got.PhtraceinfoList)
require.Equal(t, genesisState.PhtraceinfoCount, got.PhtraceinfoCount)
// this line is used by starport scaffolding # genesis/test/assert
}
