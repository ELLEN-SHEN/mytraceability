package keeper_test

import (
	"testing"

    "traceability/x/traceability/keeper"
    "traceability/x/traceability/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "traceability/testutil/keeper"
	"traceability/testutil/nullify"
	"github.com/stretchr/testify/require"
)

func createNPhtraceinfo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Phtraceinfo {
	items := make([]types.Phtraceinfo, n)
	for i := range items {
		items[i].Id = keeper.AppendPhtraceinfo(ctx, items[i])
	}
	return items
}

func TestPhtraceinfoGet(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNPhtraceinfo(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetPhtraceinfo(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestPhtraceinfoRemove(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNPhtraceinfo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePhtraceinfo(ctx, item.Id)
		_, found := keeper.GetPhtraceinfo(ctx, item.Id)
		require.False(t, found)
	}
}

func TestPhtraceinfoGetAll(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNPhtraceinfo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllPhtraceinfo(ctx)),
	)
}

func TestPhtraceinfoCount(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNPhtraceinfo(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetPhtraceinfoCount(ctx))
}
