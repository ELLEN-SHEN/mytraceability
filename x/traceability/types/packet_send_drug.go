package types

// ValidateBasic is used for validating the packet
func (p SendDrugPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p SendDrugPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_SendDrugPacket{&p}

	return modulePacket.Marshal()
}
