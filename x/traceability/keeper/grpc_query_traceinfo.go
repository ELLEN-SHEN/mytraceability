package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"traceability/x/traceability/types"
)

func (k Keeper) TraceinfoAll(c context.Context, req *types.QueryAllTraceinfoRequest) (*types.QueryAllTraceinfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var traceinfos []types.Traceinfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	traceinfoStore := prefix.NewStore(store, types.KeyPrefix(types.TraceinfoKey))

	pageRes, err := query.Paginate(traceinfoStore, req.Pagination, func(key []byte, value []byte) error {
		var traceinfo types.Traceinfo
		if err := k.cdc.Unmarshal(value, &traceinfo); err != nil {
			return err
		}

		traceinfos = append(traceinfos, traceinfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTraceinfoResponse{Traceinfo: traceinfos, Pagination: pageRes}, nil
}

func (k Keeper) Traceinfo(c context.Context, req *types.QueryGetTraceinfoRequest) (*types.QueryGetTraceinfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	traceinfo, found := k.GetTraceinfo(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetTraceinfoResponse{Traceinfo: traceinfo}, nil
}
