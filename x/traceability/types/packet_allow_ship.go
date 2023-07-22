package types

// ValidateBasic is used for validating the packet
func (p AllowShipPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p AllowShipPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_AllowShipPacket{&p}

	return modulePacket.Marshal()
}
