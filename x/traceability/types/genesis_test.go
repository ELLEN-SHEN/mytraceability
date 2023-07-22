package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"traceability/x/traceability/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				PortId: types.PortID,
				TraceinfoList: []types.Traceinfo{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				TraceinfoCount: 2,
				PhtraceinfoList: []types.Phtraceinfo{
	{
		Id: 0,
	},
	{
		Id: 1,
	},
},
PhtraceinfoCount: 2,
// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated traceinfo",
			genState: &types.GenesisState{
				TraceinfoList: []types.Traceinfo{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid traceinfo count",
			genState: &types.GenesisState{
				TraceinfoList: []types.Traceinfo{
					{
						Id: 1,
					},
				},
				TraceinfoCount: 0,
			},
			valid: false,
		},
		{
	desc:     "duplicated phtraceinfo",
	genState: &types.GenesisState{
		PhtraceinfoList: []types.Phtraceinfo{
			{
				Id: 0,
			},
			{
				Id: 0,
			},
		},
	},
	valid:    false,
},
{
	desc:     "invalid phtraceinfo count",
	genState: &types.GenesisState{
		PhtraceinfoList: []types.Phtraceinfo{
			{
				Id: 1,
			},
		},
		PhtraceinfoCount: 0,
	},
	valid:    false,
},
// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
