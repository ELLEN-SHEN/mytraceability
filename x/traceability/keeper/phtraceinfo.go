package keeper

import (
	"encoding/binary"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"traceability/x/traceability/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
)

// GetPhtraceinfoCount get the total number of phtraceinfo
func (k Keeper) GetPhtraceinfoCount(ctx sdk.Context) uint64 {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PhtraceinfoCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetPhtraceinfoCount set the total number of phtraceinfo
func (k Keeper) SetPhtraceinfoCount(ctx sdk.Context, count uint64)  {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.PhtraceinfoCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendPhtraceinfo appends a phtraceinfo in the store with a new id and update the count
func (k Keeper) AppendPhtraceinfo(
    ctx sdk.Context,
    phtraceinfo types.Phtraceinfo,
) uint64 {
	// Create the phtraceinfo
    count := k.GetPhtraceinfoCount(ctx)

    // Set the ID of the appended value
    phtraceinfo.Id = count

    store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PhtraceinfoKey))
    appendedValue := k.cdc.MustMarshal(&phtraceinfo)
    store.Set(GetPhtraceinfoIDBytes(phtraceinfo.Id), appendedValue)

    // Update phtraceinfo count
    k.SetPhtraceinfoCount(ctx, count+1)

    return count
}

// SetPhtraceinfo set a specific phtraceinfo in the store
func (k Keeper) SetPhtraceinfo(ctx sdk.Context, phtraceinfo types.Phtraceinfo) {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PhtraceinfoKey))
	b := k.cdc.MustMarshal(&phtraceinfo)
	store.Set(GetPhtraceinfoIDBytes(phtraceinfo.Id), b)
}

// GetPhtraceinfo returns a phtraceinfo from its id
func (k Keeper) GetPhtraceinfo(ctx sdk.Context, id uint64) (val types.Phtraceinfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PhtraceinfoKey))
	b := store.Get(GetPhtraceinfoIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePhtraceinfo removes a phtraceinfo from the store
func (k Keeper) RemovePhtraceinfo(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PhtraceinfoKey))
	store.Delete(GetPhtraceinfoIDBytes(id))
}

// GetAllPhtraceinfo returns all phtraceinfo
func (k Keeper) GetAllPhtraceinfo(ctx sdk.Context) (list []types.Phtraceinfo) {
    store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PhtraceinfoKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Phtraceinfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
        list = append(list, val)
	}

    return
}

// GetPhtraceinfoIDBytes returns the byte representation of the ID
func GetPhtraceinfoIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPhtraceinfoIDFromBytes returns ID in uint64 format from a byte array
func GetPhtraceinfoIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
