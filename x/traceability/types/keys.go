package types

const (
	// ModuleName defines the module name
	ModuleName = "traceability"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_traceability"

	// Version defines the current version the IBC module supports
	Version = "traceability-1"

	// PortID is the default port id that module binds to
	PortID = "traceability"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("traceability-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	TraceinfoKey      = "Traceinfo/value/"
	TraceinfoCountKey = "Traceinfo/count/"
)

const (
	PhtraceinfoKey= "Phtraceinfo/value/"
	PhtraceinfoCountKey= "Phtraceinfo/count/"
)
