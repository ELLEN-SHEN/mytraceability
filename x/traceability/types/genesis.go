package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v5/modules/core/24-host"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:        PortID,
		TraceinfoList: []Traceinfo{},
		PhtraceinfoList: []Phtraceinfo{},
// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in traceinfo
	traceinfoIdMap := make(map[uint64]bool)
	traceinfoCount := gs.GetTraceinfoCount()
	for _, elem := range gs.TraceinfoList {
		if _, ok := traceinfoIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for traceinfo")
		}
		if elem.Id >= traceinfoCount {
			return fmt.Errorf("traceinfo id should be lower or equal than the last id")
		}
		traceinfoIdMap[elem.Id] = true
	}
	// Check for duplicated ID in phtraceinfo
phtraceinfoIdMap := make(map[uint64]bool)
phtraceinfoCount := gs.GetPhtraceinfoCount()
for _, elem := range gs.PhtraceinfoList {
	if _, ok := phtraceinfoIdMap[elem.Id]; ok {
		return fmt.Errorf("duplicated id for phtraceinfo")
	}
	if elem.Id >= phtraceinfoCount {
		return fmt.Errorf("phtraceinfo id should be lower or equal than the last id")
	}
	phtraceinfoIdMap[elem.Id] = true
}
// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
