package types

// ValidateBasic is used for validating the packet
func (p DestroyDrugPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p DestroyDrugPacketData) GetBytes() ([]byte, error) {
	var modulePacket TraceabilityPacketData

	modulePacket.Packet = &TraceabilityPacketData_DestroyDrugPacket{&p}

	return modulePacket.Marshal()
}
