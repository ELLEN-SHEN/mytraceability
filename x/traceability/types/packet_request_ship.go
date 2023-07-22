package types

// ValidateBasic is used for validating the packet
func (p RequestShipPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p RequestShipPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_RequestShipPacket{&p}

	return modulePacket.Marshal()
}
