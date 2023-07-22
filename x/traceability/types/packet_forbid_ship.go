package types

// ValidateBasic is used for validating the packet
func (p ForbidShipPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p ForbidShipPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_ForbidShipPacket{&p}

	return modulePacket.Marshal()
}
