package types

// IBC events
const (
	EventTypeTimeout           = "timeout"
	EventTypeRequestShipPacket = "requestShip_packet"
	EventTypeSendDrugPacket    = "sendDrug_packet"
	EventTypeDestroyDrugPacket = "destroyDrug_packet"
	EventTypeAllowShipPacket   = "allowShip_packet"
	EventTypeForbidShipPacket  = "forbidShip_packet"
	// this line is used by starport scaffolding # ibc/packet/event

	AttributeKeyAckSuccess = "success"
	AttributeKeyAck        = "acknowledgement"
	AttributeKeyAckError   = "error"
)
