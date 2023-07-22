package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v5/modules/core/02-client/types"
	"traceability/x/traceability/types"
)

func (k msgServer) SendRequestShip(goCtx context.Context, msg *types.MsgSendRequestShip) (*types.MsgSendRequestShipResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet
	var traceinfo = types.Traceinfo{
		Dic:            msg.Dic,
		Drugprof:       msg.Drugprof,
		Termofvalidity: msg.Termofvalidity,
		Pharmacy:       msg.Pharmacy,
		State:          "requested",
		Manufacturer:   msg.Creator,
	}
	k.AppendTraceinfo(ctx, traceinfo)

	// Construct the packet
	var packet types.RequestShipPacketData

	packet.Dic = msg.Dic
	packet.Drugprof = msg.Drugprof
	packet.Termofvalidity = msg.Termofvalidity
	packet.Pharmacy = msg.Pharmacy
	packet.Creator = msg.Creator

	// Transmit the packet
	err := k.TransmitRequestShipPacket(
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

	return &types.MsgSendRequestShipResponse{}, nil
}
