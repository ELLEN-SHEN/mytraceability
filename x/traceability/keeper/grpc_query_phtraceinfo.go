package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"traceability/x/traceability/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PhtraceinfoAll(c context.Context, req *types.QueryAllPhtraceinfoRequest) (*types.QueryAllPhtraceinfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var phtraceinfos []types.Phtraceinfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	phtraceinfoStore := prefix.NewStore(store, types.KeyPrefix(types.PhtraceinfoKey))

	pageRes, err := query.Paginate(phtraceinfoStore, req.Pagination, func(key []byte, value []byte) error {
		var phtraceinfo types.Phtraceinfo
		if err := k.cdc.Unmarshal(value, &phtraceinfo); err != nil {
			return err
		}

		phtraceinfos = append(phtraceinfos, phtraceinfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPhtraceinfoResponse{Phtraceinfo: phtraceinfos, Pagination: pageRes}, nil
}

func (k Keeper) Phtraceinfo(c context.Context, req *types.QueryGetPhtraceinfoRequest) (*types.QueryGetPhtraceinfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	phtraceinfo, found := k.GetPhtraceinfo(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetPhtraceinfoResponse{Phtraceinfo: phtraceinfo}, nil
}
