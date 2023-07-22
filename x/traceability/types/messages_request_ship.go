package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"
)

const TypeMsgSendRequestShip = "send_request_ship"

var _ sdk.Msg = &MsgSendRequestShip{}

func NewMsgSendRequestShip(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	dic string,
	drugprof string,
	termofvalidity string,
	pharmacy string,
) *MsgSendRequestShip {
	return &MsgSendRequestShip{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Dic:              dic,
		Drugprof:         drugprof,
		Termofvalidity:   termofvalidity,
		Pharmacy:         pharmacy,
	}
}

func (msg *MsgSendRequestShip) Route() string {
	return RouterKey
}

func (msg *MsgSendRequestShip) Type() string {
	return TypeMsgSendRequestShip
}

func (msg *MsgSendRequestShip) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendRequestShip) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendRequestShip) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	termofvalidity, err := strconv.ParseInt(msg.Termofvalidity, 10, 64)
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Term of validity is not an integer")
	}
	if termofvalidity <= 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Term of validity should be a positive integer")
	}
	return nil
}
