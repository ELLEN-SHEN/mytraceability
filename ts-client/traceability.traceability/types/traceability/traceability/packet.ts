/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "traceability.traceability";

export interface TraceabilityPacketData {
  noData:
    | NoData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  forbidShipPacket:
    | ForbidShipPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  allowShipPacket:
    | AllowShipPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  destroyDrugPacket:
    | DestroyDrugPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  sendDrugPacket:
    | SendDrugPacketData
    | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field/number */
  requestShipPacket: RequestShipPacketData | undefined;
}

export interface NoData {
}

/** RequestShipPacketData defines a struct for the packet payload */
export interface RequestShipPacketData {
  dic: string;
  drugprof: string;
  termofvalidity: string;
  pharmacy: string;
  creator: string;
}

/** RequestShipPacketAck defines a struct for the packet acknowledgment */
export interface RequestShipPacketAck {
}

/** SendDrugPacketData defines a struct for the packet payload */
export interface SendDrugPacketData {
  id: number;
}

/** SendDrugPacketAck defines a struct for the packet acknowledgment */
export interface SendDrugPacketAck {
}

/** DestroyDrugPacketData defines a struct for the packet payload */
export interface DestroyDrugPacketData {
  id: number;
}

/** DestroyDrugPacketAck defines a struct for the packet acknowledgment */
export interface DestroyDrugPacketAck {
}

/** AllowShipPacketData defines a struct for the packet payload */
export interface AllowShipPacketData {
  id: number;
}

/** AllowShipPacketAck defines a struct for the packet acknowledgment */
export interface AllowShipPacketAck {
}

/** ForbidShipPacketData defines a struct for the packet payload */
export interface ForbidShipPacketData {
  id: number;
}

/** ForbidShipPacketAck defines a struct for the packet acknowledgment */
export interface ForbidShipPacketAck {
}

function createBaseTraceabilityPacketData(): TraceabilityPacketData {
  return {
    noData: undefined,
    forbidShipPacket: undefined,
    allowShipPacket: undefined,
    destroyDrugPacket: undefined,
    sendDrugPacket: undefined,
    requestShipPacket: undefined,
  };
}

export const TraceabilityPacketData = {
  encode(message: TraceabilityPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.forbidShipPacket !== undefined) {
      ForbidShipPacketData.encode(message.forbidShipPacket, writer.uint32(50).fork()).ldelim();
    }
    if (message.allowShipPacket !== undefined) {
      AllowShipPacketData.encode(message.allowShipPacket, writer.uint32(42).fork()).ldelim();
    }
    if (message.destroyDrugPacket !== undefined) {
      DestroyDrugPacketData.encode(message.destroyDrugPacket, writer.uint32(34).fork()).ldelim();
    }
    if (message.sendDrugPacket !== undefined) {
      SendDrugPacketData.encode(message.sendDrugPacket, writer.uint32(26).fork()).ldelim();
    }
    if (message.requestShipPacket !== undefined) {
      RequestShipPacketData.encode(message.requestShipPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraceabilityPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceabilityPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 6:
          message.forbidShipPacket = ForbidShipPacketData.decode(reader, reader.uint32());
          break;
        case 5:
          message.allowShipPacket = AllowShipPacketData.decode(reader, reader.uint32());
          break;
        case 4:
          message.destroyDrugPacket = DestroyDrugPacketData.decode(reader, reader.uint32());
          break;
        case 3:
          message.sendDrugPacket = SendDrugPacketData.decode(reader, reader.uint32());
          break;
        case 2:
          message.requestShipPacket = RequestShipPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TraceabilityPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      forbidShipPacket: isSet(object.forbidShipPacket)
        ? ForbidShipPacketData.fromJSON(object.forbidShipPacket)
        : undefined,
      allowShipPacket: isSet(object.allowShipPacket) ? AllowShipPacketData.fromJSON(object.allowShipPacket) : undefined,
      destroyDrugPacket: isSet(object.destroyDrugPacket)
        ? DestroyDrugPacketData.fromJSON(object.destroyDrugPacket)
        : undefined,
      sendDrugPacket: isSet(object.sendDrugPacket) ? SendDrugPacketData.fromJSON(object.sendDrugPacket) : undefined,
      requestShipPacket: isSet(object.requestShipPacket)
        ? RequestShipPacketData.fromJSON(object.requestShipPacket)
        : undefined,
    };
  },

  toJSON(message: TraceabilityPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.forbidShipPacket !== undefined && (obj.forbidShipPacket = message.forbidShipPacket
      ? ForbidShipPacketData.toJSON(message.forbidShipPacket)
      : undefined);
    message.allowShipPacket !== undefined && (obj.allowShipPacket = message.allowShipPacket
      ? AllowShipPacketData.toJSON(message.allowShipPacket)
      : undefined);
    message.destroyDrugPacket !== undefined && (obj.destroyDrugPacket = message.destroyDrugPacket
      ? DestroyDrugPacketData.toJSON(message.destroyDrugPacket)
      : undefined);
    message.sendDrugPacket !== undefined
      && (obj.sendDrugPacket = message.sendDrugPacket ? SendDrugPacketData.toJSON(message.sendDrugPacket) : undefined);
    message.requestShipPacket !== undefined && (obj.requestShipPacket = message.requestShipPacket
      ? RequestShipPacketData.toJSON(message.requestShipPacket)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TraceabilityPacketData>, I>>(object: I): TraceabilityPacketData {
    const message = createBaseTraceabilityPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.forbidShipPacket = (object.forbidShipPacket !== undefined && object.forbidShipPacket !== null)
      ? ForbidShipPacketData.fromPartial(object.forbidShipPacket)
      : undefined;
    message.allowShipPacket = (object.allowShipPacket !== undefined && object.allowShipPacket !== null)
      ? AllowShipPacketData.fromPartial(object.allowShipPacket)
      : undefined;
    message.destroyDrugPacket = (object.destroyDrugPacket !== undefined && object.destroyDrugPacket !== null)
      ? DestroyDrugPacketData.fromPartial(object.destroyDrugPacket)
      : undefined;
    message.sendDrugPacket = (object.sendDrugPacket !== undefined && object.sendDrugPacket !== null)
      ? SendDrugPacketData.fromPartial(object.sendDrugPacket)
      : undefined;
    message.requestShipPacket = (object.requestShipPacket !== undefined && object.requestShipPacket !== null)
      ? RequestShipPacketData.fromPartial(object.requestShipPacket)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseRequestShipPacketData(): RequestShipPacketData {
  return { dic: "", drugprof: "", termofvalidity: "", pharmacy: "", creator: "" };
}

export const RequestShipPacketData = {
  encode(message: RequestShipPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dic !== "") {
      writer.uint32(10).string(message.dic);
    }
    if (message.drugprof !== "") {
      writer.uint32(18).string(message.drugprof);
    }
    if (message.termofvalidity !== "") {
      writer.uint32(26).string(message.termofvalidity);
    }
    if (message.pharmacy !== "") {
      writer.uint32(34).string(message.pharmacy);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestShipPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestShipPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dic = reader.string();
          break;
        case 2:
          message.drugprof = reader.string();
          break;
        case 3:
          message.termofvalidity = reader.string();
          break;
        case 4:
          message.pharmacy = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestShipPacketData {
    return {
      dic: isSet(object.dic) ? String(object.dic) : "",
      drugprof: isSet(object.drugprof) ? String(object.drugprof) : "",
      termofvalidity: isSet(object.termofvalidity) ? String(object.termofvalidity) : "",
      pharmacy: isSet(object.pharmacy) ? String(object.pharmacy) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: RequestShipPacketData): unknown {
    const obj: any = {};
    message.dic !== undefined && (obj.dic = message.dic);
    message.drugprof !== undefined && (obj.drugprof = message.drugprof);
    message.termofvalidity !== undefined && (obj.termofvalidity = message.termofvalidity);
    message.pharmacy !== undefined && (obj.pharmacy = message.pharmacy);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestShipPacketData>, I>>(object: I): RequestShipPacketData {
    const message = createBaseRequestShipPacketData();
    message.dic = object.dic ?? "";
    message.drugprof = object.drugprof ?? "";
    message.termofvalidity = object.termofvalidity ?? "";
    message.pharmacy = object.pharmacy ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseRequestShipPacketAck(): RequestShipPacketAck {
  return {};
}

export const RequestShipPacketAck = {
  encode(_: RequestShipPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestShipPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestShipPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestShipPacketAck {
    return {};
  },

  toJSON(_: RequestShipPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestShipPacketAck>, I>>(_: I): RequestShipPacketAck {
    const message = createBaseRequestShipPacketAck();
    return message;
  },
};

function createBaseSendDrugPacketData(): SendDrugPacketData {
  return { id: 0 };
}

export const SendDrugPacketData = {
  encode(message: SendDrugPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendDrugPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendDrugPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendDrugPacketData {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: SendDrugPacketData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendDrugPacketData>, I>>(object: I): SendDrugPacketData {
    const message = createBaseSendDrugPacketData();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSendDrugPacketAck(): SendDrugPacketAck {
  return {};
}

export const SendDrugPacketAck = {
  encode(_: SendDrugPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendDrugPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendDrugPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SendDrugPacketAck {
    return {};
  },

  toJSON(_: SendDrugPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendDrugPacketAck>, I>>(_: I): SendDrugPacketAck {
    const message = createBaseSendDrugPacketAck();
    return message;
  },
};

function createBaseDestroyDrugPacketData(): DestroyDrugPacketData {
  return { id: 0 };
}

export const DestroyDrugPacketData = {
  encode(message: DestroyDrugPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyDrugPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyDrugPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DestroyDrugPacketData {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: DestroyDrugPacketData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DestroyDrugPacketData>, I>>(object: I): DestroyDrugPacketData {
    const message = createBaseDestroyDrugPacketData();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDestroyDrugPacketAck(): DestroyDrugPacketAck {
  return {};
}

export const DestroyDrugPacketAck = {
  encode(_: DestroyDrugPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DestroyDrugPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestroyDrugPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DestroyDrugPacketAck {
    return {};
  },

  toJSON(_: DestroyDrugPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DestroyDrugPacketAck>, I>>(_: I): DestroyDrugPacketAck {
    const message = createBaseDestroyDrugPacketAck();
    return message;
  },
};

function createBaseAllowShipPacketData(): AllowShipPacketData {
  return { id: 0 };
}

export const AllowShipPacketData = {
  encode(message: AllowShipPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowShipPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowShipPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllowShipPacketData {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: AllowShipPacketData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowShipPacketData>, I>>(object: I): AllowShipPacketData {
    const message = createBaseAllowShipPacketData();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseAllowShipPacketAck(): AllowShipPacketAck {
  return {};
}

export const AllowShipPacketAck = {
  encode(_: AllowShipPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowShipPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowShipPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AllowShipPacketAck {
    return {};
  },

  toJSON(_: AllowShipPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AllowShipPacketAck>, I>>(_: I): AllowShipPacketAck {
    const message = createBaseAllowShipPacketAck();
    return message;
  },
};

function createBaseForbidShipPacketData(): ForbidShipPacketData {
  return { id: 0 };
}

export const ForbidShipPacketData = {
  encode(message: ForbidShipPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForbidShipPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForbidShipPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForbidShipPacketData {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ForbidShipPacketData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForbidShipPacketData>, I>>(object: I): ForbidShipPacketData {
    const message = createBaseForbidShipPacketData();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseForbidShipPacketAck(): ForbidShipPacketAck {
  return {};
}

export const ForbidShipPacketAck = {
  encode(_: ForbidShipPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForbidShipPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForbidShipPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ForbidShipPacketAck {
    return {};
  },

  toJSON(_: ForbidShipPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForbidShipPacketAck>, I>>(_: I): ForbidShipPacketAck {
    const message = createBaseForbidShipPacketAck();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
