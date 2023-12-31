package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendDestroyDrug = "send_destroy_drug"

var _ sdk.Msg = &MsgSendDestroyDrug{}

func NewMsgSendDestroyDrug(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	id uint64,
) *MsgSendDestroyDrug {
	return &MsgSendDestroyDrug{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Id:               id,
	}
}

func (msg *MsgSendDestroyDrug) Route() string {
	return RouterKey
}

func (msg *MsgSendDestroyDrug) Type() string {
	return TypeMsgSendDestroyDrug
}

func (msg *MsgSendDestroyDrug) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendDestroyDrug) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendDestroyDrug) ValidateBasic() error {
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
	return nil
}
