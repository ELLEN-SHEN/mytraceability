// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: traceability/traceability/traceinfo.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Traceinfo struct {
	Id             uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Dic            string `protobuf:"bytes,2,opt,name=dic,proto3" json:"dic,omitempty"`
	Drugprof       string `protobuf:"bytes,3,opt,name=drugprof,proto3" json:"drugprof,omitempty"`
	Pharmacy       string `protobuf:"bytes,4,opt,name=pharmacy,proto3" json:"pharmacy,omitempty"`
	Termofvalidity string `protobuf:"bytes,5,opt,name=termofvalidity,proto3" json:"termofvalidity,omitempty"`
	State          string `protobuf:"bytes,6,opt,name=state,proto3" json:"state,omitempty"`
	Manufacturer   string `protobuf:"bytes,7,opt,name=manufacturer,proto3" json:"manufacturer,omitempty"`
}

func (m *Traceinfo) Reset()         { *m = Traceinfo{} }
func (m *Traceinfo) String() string { return proto.CompactTextString(m) }
func (*Traceinfo) ProtoMessage()    {}
func (*Traceinfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_9dc3961539114aa1, []int{0}
}
func (m *Traceinfo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Traceinfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Traceinfo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Traceinfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Traceinfo.Merge(m, src)
}
func (m *Traceinfo) XXX_Size() int {
	return m.Size()
}
func (m *Traceinfo) XXX_DiscardUnknown() {
	xxx_messageInfo_Traceinfo.DiscardUnknown(m)
}

var xxx_messageInfo_Traceinfo proto.InternalMessageInfo

func (m *Traceinfo) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Traceinfo) GetDic() string {
	if m != nil {
		return m.Dic
	}
	return ""
}

func (m *Traceinfo) GetDrugprof() string {
	if m != nil {
		return m.Drugprof
	}
	return ""
}

func (m *Traceinfo) GetPharmacy() string {
	if m != nil {
		return m.Pharmacy
	}
	return ""
}

func (m *Traceinfo) GetTermofvalidity() string {
	if m != nil {
		return m.Termofvalidity
	}
	return ""
}

func (m *Traceinfo) GetState() string {
	if m != nil {
		return m.State
	}
	return ""
}

func (m *Traceinfo) GetManufacturer() string {
	if m != nil {
		return m.Manufacturer
	}
	return ""
}

func init() {
	proto.RegisterType((*Traceinfo)(nil), "traceability.traceability.Traceinfo")
}

func init() {
	proto.RegisterFile("traceability/traceability/traceinfo.proto", fileDescriptor_9dc3961539114aa1)
}

var fileDescriptor_9dc3961539114aa1 = []byte{
	// 236 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x2c, 0x29, 0x4a, 0x4c,
	0x4e, 0x4d, 0x4c, 0xca, 0xcc, 0xc9, 0x2c, 0xa9, 0xd4, 0xc7, 0xe4, 0x64, 0xe6, 0xa5, 0xe5, 0xeb,
	0x15, 0x14, 0xe5, 0x97, 0xe4, 0x0b, 0x49, 0x22, 0xcb, 0xea, 0x21, 0x73, 0x94, 0x8e, 0x33, 0x72,
	0x71, 0x86, 0xc0, 0x94, 0x0b, 0xf1, 0x71, 0x31, 0x65, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xb0,
	0x04, 0x31, 0x65, 0xa6, 0x08, 0x09, 0x70, 0x31, 0xa7, 0x64, 0x26, 0x4b, 0x30, 0x29, 0x30, 0x6a,
	0x70, 0x06, 0x81, 0x98, 0x42, 0x52, 0x5c, 0x1c, 0x29, 0x45, 0xa5, 0xe9, 0x05, 0x45, 0xf9, 0x69,
	0x12, 0xcc, 0x60, 0x61, 0x38, 0x1f, 0x24, 0x57, 0x90, 0x91, 0x58, 0x94, 0x9b, 0x98, 0x5c, 0x29,
	0xc1, 0x02, 0x91, 0x83, 0xf1, 0x85, 0xd4, 0xb8, 0xf8, 0x4a, 0x52, 0x8b, 0x72, 0xf3, 0xd3, 0xca,
	0x12, 0x73, 0x32, 0x53, 0x32, 0x4b, 0x2a, 0x25, 0x58, 0xc1, 0x2a, 0xd0, 0x44, 0x85, 0x44, 0xb8,
	0x58, 0x8b, 0x4b, 0x12, 0x4b, 0x52, 0x25, 0xd8, 0xc0, 0xd2, 0x10, 0x8e, 0x90, 0x12, 0x17, 0x4f,
	0x6e, 0x62, 0x5e, 0x69, 0x5a, 0x62, 0x72, 0x49, 0x69, 0x51, 0x6a, 0x91, 0x04, 0x3b, 0x58, 0x12,
	0x45, 0xcc, 0xc9, 0xfa, 0xc4, 0x23, 0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63,
	0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0xa2, 0x14, 0x51,
	0x02, 0xa7, 0x02, 0x2d, 0xac, 0x2a, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0x01, 0x65, 0x0c, 0x08,
	0x00, 0x00, 0xff, 0xff, 0x90, 0xcd, 0x88, 0x24, 0x55, 0x01, 0x00, 0x00,
}

func (m *Traceinfo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Traceinfo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Traceinfo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Manufacturer) > 0 {
		i -= len(m.Manufacturer)
		copy(dAtA[i:], m.Manufacturer)
		i = encodeVarintTraceinfo(dAtA, i, uint64(len(m.Manufacturer)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.State) > 0 {
		i -= len(m.State)
		copy(dAtA[i:], m.State)
		i = encodeVarintTraceinfo(dAtA, i, uint64(len(m.State)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Termofvalidity) > 0 {
		i -= len(m.Termofvalidity)
		copy(dAtA[i:], m.Termofvalidity)
		i = encodeVarintTraceinfo(dAtA, i, uint64(len(m.Termofvalidity)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Pharmacy) > 0 {
		i -= len(m.Pharmacy)
		copy(dAtA[i:], m.Pharmacy)
		i = encodeVarintTraceinfo(dAtA, i, uint64(len(m.Pharmacy)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Drugprof) > 0 {
		i -= len(m.Drugprof)
		copy(dAtA[i:], m.Drugprof)
		i = encodeVarintTraceinfo(dAtA, i, uint64(len(m.Drugprof)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Dic) > 0 {
		i -= len(m.Dic)
		copy(dAtA[i:], m.Dic)
		i = encodeVarintTraceinfo(dAtA, i, uint64(len(m.Dic)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintTraceinfo(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTraceinfo(dAtA []byte, offset int, v uint64) int {
	offset -= sovTraceinfo(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Traceinfo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTraceinfo(uint64(m.Id))
	}
	l = len(m.Dic)
	if l > 0 {
		n += 1 + l + sovTraceinfo(uint64(l))
	}
	l = len(m.Drugprof)
	if l > 0 {
		n += 1 + l + sovTraceinfo(uint64(l))
	}
	l = len(m.Pharmacy)
	if l > 0 {
		n += 1 + l + sovTraceinfo(uint64(l))
	}
	l = len(m.Termofvalidity)
	if l > 0 {
		n += 1 + l + sovTraceinfo(uint64(l))
	}
	l = len(m.State)
	if l > 0 {
		n += 1 + l + sovTraceinfo(uint64(l))
	}
	l = len(m.Manufacturer)
	if l > 0 {
		n += 1 + l + sovTraceinfo(uint64(l))
	}
	return n
}

func sovTraceinfo(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTraceinfo(x uint64) (n int) {
	return sovTraceinfo(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Traceinfo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTraceinfo
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Traceinfo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Traceinfo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dic", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTraceinfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Dic = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Drugprof", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTraceinfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Drugprof = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pharmacy", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTraceinfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pharmacy = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Termofvalidity", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTraceinfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Termofvalidity = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field State", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTraceinfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.State = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Manufacturer", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTraceinfo
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Manufacturer = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTraceinfo(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTraceinfo
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTraceinfo(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTraceinfo
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTraceinfo
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTraceinfo
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTraceinfo
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTraceinfo
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTraceinfo        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTraceinfo          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTraceinfo = fmt.Errorf("proto: unexpected end of group")
)
