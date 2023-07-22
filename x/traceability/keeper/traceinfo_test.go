package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "traceability/testutil/keeper"
	"traceability/testutil/nullify"
	"traceability/x/traceability/keeper"
	"traceability/x/traceability/types"
)

func createNTraceinfo(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Traceinfo {
	items := make([]types.Traceinfo, n)
	for i := range items {
		items[i].Id = keeper.AppendTraceinfo(ctx, items[i])
	}
	return items
}

func TestTraceinfoGet(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNTraceinfo(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTraceinfo(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTraceinfoRemove(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNTraceinfo(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTraceinfo(ctx, item.Id)
		_, found := keeper.GetTraceinfo(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTraceinfoGetAll(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNTraceinfo(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTraceinfo(ctx)),
	)
}

func TestTraceinfoCount(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	items := createNTraceinfo(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTraceinfoCount(ctx))
}
