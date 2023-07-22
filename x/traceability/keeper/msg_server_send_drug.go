package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"traceability/x/traceability/types"
)

func (k msgServer) SendSendDrug(goCtx context.Context, msg *types.MsgSendSendDrug) (*types.MsgSendSendDrugResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet
	traceinfo, found := k.GetTraceinfo(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "key %d doesn't exist", msg.Id)
	}
	if traceinfo.State != "allowed" {
		return nil, sdkerrors.Wrapf(types.ErrWrongTraceinfoState, "%v", traceinfo.State)
	}
	traceinfo.State = "sended"
	k.SetTraceinfo(ctx, traceinfo)
	// Construct the packet
	var packet types.SendDrugPacketData

	packet.Id = msg.Id

	// Transmit the packet
	err := k.TransmitSendDrugPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendSendDrugResponse{}, nil
}
