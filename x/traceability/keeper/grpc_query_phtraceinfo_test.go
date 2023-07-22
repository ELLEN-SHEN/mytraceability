package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"traceability/x/traceability/types"
	"traceability/testutil/nullify"
	keepertest "traceability/testutil/keeper"
)

func TestPhtraceinfoQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPhtraceinfo(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetPhtraceinfoRequest
		response *types.QueryGetPhtraceinfoResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetPhtraceinfoRequest{Id: msgs[0].Id},
			response: &types.QueryGetPhtraceinfoResponse{Phtraceinfo: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetPhtraceinfoRequest{Id: msgs[1].Id},
			response: &types.QueryGetPhtraceinfoResponse{Phtraceinfo: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetPhtraceinfoRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Phtraceinfo(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
			    require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestPhtraceinfoQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.TraceabilityKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNPhtraceinfo(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllPhtraceinfoRequest {
		return &types.QueryAllPhtraceinfoRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PhtraceinfoAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Phtraceinfo), step)
			require.Subset(t,
				nullify.Fill(msgs),
            	nullify.Fill(resp.Phtraceinfo),
            )
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.PhtraceinfoAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Phtraceinfo), step)
			require.Subset(t,
				nullify.Fill(msgs),
            	nullify.Fill(resp.Phtraceinfo),
            )
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.PhtraceinfoAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Phtraceinfo),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.PhtraceinfoAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
