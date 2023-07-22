package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"traceability/x/traceability/types"
)

// GetTraceinfoCount get the total number of traceinfo
func (k Keeper) GetTraceinfoCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TraceinfoCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTraceinfoCount set the total number of traceinfo
func (k Keeper) SetTraceinfoCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TraceinfoCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTraceinfo appends a traceinfo in the store with a new id and update the count
func (k Keeper) AppendTraceinfo(
	ctx sdk.Context,
	traceinfo types.Traceinfo,
) uint64 {
	// Create the traceinfo
	count := k.GetTraceinfoCount(ctx)

	// Set the ID of the appended value
	traceinfo.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TraceinfoKey))
	appendedValue := k.cdc.MustMarshal(&traceinfo)
	store.Set(GetTraceinfoIDBytes(traceinfo.Id), appendedValue)

	// Update traceinfo count
	k.SetTraceinfoCount(ctx, count+1)

	return count
}

// SetTraceinfo set a specific traceinfo in the store
func (k Keeper) SetTraceinfo(ctx sdk.Context, traceinfo types.Traceinfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TraceinfoKey))
	b := k.cdc.MustMarshal(&traceinfo)
	store.Set(GetTraceinfoIDBytes(traceinfo.Id), b)
}

// GetTraceinfo returns a traceinfo from its id
func (k Keeper) GetTraceinfo(ctx sdk.Context, id uint64) (val types.Traceinfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TraceinfoKey))
	b := store.Get(GetTraceinfoIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTraceinfo removes a traceinfo from the store
func (k Keeper) RemoveTraceinfo(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TraceinfoKey))
	store.Delete(GetTraceinfoIDBytes(id))
}

// GetAllTraceinfo returns all traceinfo
func (k Keeper) GetAllTraceinfo(ctx sdk.Context) (list []types.Traceinfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TraceinfoKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Traceinfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTraceinfoIDBytes returns the byte representation of the ID
func GetTraceinfoIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTraceinfoIDFromBytes returns ID in uint64 format from a byte array
func GetTraceinfoIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
