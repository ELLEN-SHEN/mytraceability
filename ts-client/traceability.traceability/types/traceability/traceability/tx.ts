/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "traceability.traceability";

export interface MsgSendRequestShip {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  dic: string;
  drugprof: string;
  termofvalidity: string;
  pharmacy: string;
}

export interface MsgSendRequestShipResponse {
}

export interface MsgSendSendDrug {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  id: number;
}

export interface MsgSendSendDrugResponse {
}

export interface MsgSendDestroyDrug {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  id: number;
}

export interface MsgSendDestroyDrugResponse {
}

export interface MsgSendAllowShip {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  id: number;
}

export interface MsgSendAllowShipResponse {
}

export interface MsgSendForbidShip {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  id: number;
}

export interface MsgSendForbidShipResponse {
}

function createBaseMsgSendRequestShip(): MsgSendRequestShip {
  return {
    creator: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    dic: "",
    drugprof: "",
    termofvalidity: "",
    pharmacy: "",
  };
}

export const MsgSendRequestShip = {
  encode(message: MsgSendRequestShip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.dic !== "") {
      writer.uint32(42).string(message.dic);
    }
    if (message.drugprof !== "") {
      writer.uint32(50).string(message.drugprof);
    }
    if (message.termofvalidity !== "") {
      writer.uint32(58).string(message.termofvalidity);
    }
    if (message.pharmacy !== "") {
      writer.uint32(66).string(message.pharmacy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestShip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestShip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.dic = reader.string();
          break;
        case 6:
          message.drugprof = reader.string();
          break;
        case 7:
          message.termofvalidity = reader.string();
          break;
        case 8:
          message.pharmacy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendRequestShip {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      dic: isSet(object.dic) ? String(object.dic) : "",
      drugprof: isSet(object.drugprof) ? String(object.drugprof) : "",
      termofvalidity: isSet(object.termofvalidity) ? String(object.termofvalidity) : "",
      pharmacy: isSet(object.pharmacy) ? String(object.pharmacy) : "",
    };
  },

  toJSON(message: MsgSendRequestShip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.dic !== undefined && (obj.dic = message.dic);
    message.drugprof !== undefined && (obj.drugprof = message.drugprof);
    message.termofvalidity !== undefined && (obj.termofvalidity = message.termofvalidity);
    message.pharmacy !== undefined && (obj.pharmacy = message.pharmacy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestShip>, I>>(object: I): MsgSendRequestShip {
    const message = createBaseMsgSendRequestShip();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.dic = object.dic ?? "";
    message.drugprof = object.drugprof ?? "";
    message.termofvalidity = object.termofvalidity ?? "";
    message.pharmacy = object.pharmacy ?? "";
    return message;
  },
};

function createBaseMsgSendRequestShipResponse(): MsgSendRequestShipResponse {
  return {};
}

export const MsgSendRequestShipResponse = {
  encode(_: MsgSendRequestShipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendRequestShipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendRequestShipResponse();
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

  fromJSON(_: any): MsgSendRequestShipResponse {
    return {};
  },

  toJSON(_: MsgSendRequestShipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendRequestShipResponse>, I>>(_: I): MsgSendRequestShipResponse {
    const message = createBaseMsgSendRequestShipResponse();
    return message;
  },
};

function createBaseMsgSendSendDrug(): MsgSendSendDrug {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, id: 0 };
}

export const MsgSendSendDrug = {
  encode(message: MsgSendSendDrug, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSendDrug {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendSendDrug();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendSendDrug {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgSendSendDrug): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendSendDrug>, I>>(object: I): MsgSendSendDrug {
    const message = createBaseMsgSendSendDrug();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSendSendDrugResponse(): MsgSendSendDrugResponse {
  return {};
}

export const MsgSendSendDrugResponse = {
  encode(_: MsgSendSendDrugResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendSendDrugResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendSendDrugResponse();
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

  fromJSON(_: any): MsgSendSendDrugResponse {
    return {};
  },

  toJSON(_: MsgSendSendDrugResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendSendDrugResponse>, I>>(_: I): MsgSendSendDrugResponse {
    const message = createBaseMsgSendSendDrugResponse();
    return message;
  },
};

function createBaseMsgSendDestroyDrug(): MsgSendDestroyDrug {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, id: 0 };
}

export const MsgSendDestroyDrug = {
  encode(message: MsgSendDestroyDrug, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendDestroyDrug {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendDestroyDrug();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendDestroyDrug {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgSendDestroyDrug): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendDestroyDrug>, I>>(object: I): MsgSendDestroyDrug {
    const message = createBaseMsgSendDestroyDrug();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSendDestroyDrugResponse(): MsgSendDestroyDrugResponse {
  return {};
}

export const MsgSendDestroyDrugResponse = {
  encode(_: MsgSendDestroyDrugResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendDestroyDrugResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendDestroyDrugResponse();
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

  fromJSON(_: any): MsgSendDestroyDrugResponse {
    return {};
  },

  toJSON(_: MsgSendDestroyDrugResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendDestroyDrugResponse>, I>>(_: I): MsgSendDestroyDrugResponse {
    const message = createBaseMsgSendDestroyDrugResponse();
    return message;
  },
};

function createBaseMsgSendAllowShip(): MsgSendAllowShip {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, id: 0 };
}

export const MsgSendAllowShip = {
  encode(message: MsgSendAllowShip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendAllowShip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendAllowShip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendAllowShip {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgSendAllowShip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendAllowShip>, I>>(object: I): MsgSendAllowShip {
    const message = createBaseMsgSendAllowShip();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSendAllowShipResponse(): MsgSendAllowShipResponse {
  return {};
}

export const MsgSendAllowShipResponse = {
  encode(_: MsgSendAllowShipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendAllowShipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendAllowShipResponse();
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

  fromJSON(_: any): MsgSendAllowShipResponse {
    return {};
  },

  toJSON(_: MsgSendAllowShipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendAllowShipResponse>, I>>(_: I): MsgSendAllowShipResponse {
    const message = createBaseMsgSendAllowShipResponse();
    return message;
  },
};

function createBaseMsgSendForbidShip(): MsgSendForbidShip {
  return { creator: "", port: "", channelID: "", timeoutTimestamp: 0, id: 0 };
}

export const MsgSendForbidShip = {
  encode(message: MsgSendForbidShip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendForbidShip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendForbidShip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendForbidShip {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgSendForbidShip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendForbidShip>, I>>(object: I): MsgSendForbidShip {
    const message = createBaseMsgSendForbidShip();
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSendForbidShipResponse(): MsgSendForbidShipResponse {
  return {};
}

export const MsgSendForbidShipResponse = {
  encode(_: MsgSendForbidShipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendForbidShipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendForbidShipResponse();
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

  fromJSON(_: any): MsgSendForbidShipResponse {
    return {};
  },

  toJSON(_: MsgSendForbidShipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendForbidShipResponse>, I>>(_: I): MsgSendForbidShipResponse {
    const message = createBaseMsgSendForbidShipResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SendRequestShip(request: MsgSendRequestShip): Promise<MsgSendRequestShipResponse>;
  SendSendDrug(request: MsgSendSendDrug): Promise<MsgSendSendDrugResponse>;
  SendDestroyDrug(request: MsgSendDestroyDrug): Promise<MsgSendDestroyDrugResponse>;
  SendAllowShip(request: MsgSendAllowShip): Promise<MsgSendAllowShipResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendForbidShip(request: MsgSendForbidShip): Promise<MsgSendForbidShipResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SendRequestShip = this.SendRequestShip.bind(this);
    this.SendSendDrug = this.SendSendDrug.bind(this);
    this.SendDestroyDrug = this.SendDestroyDrug.bind(this);
    this.SendAllowShip = this.SendAllowShip.bind(this);
    this.SendForbidShip = this.SendForbidShip.bind(this);
  }
  SendRequestShip(request: MsgSendRequestShip): Promise<MsgSendRequestShipResponse> {
    const data = MsgSendRequestShip.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Msg", "SendRequestShip", data);
    return promise.then((data) => MsgSendRequestShipResponse.decode(new _m0.Reader(data)));
  }

  SendSendDrug(request: MsgSendSendDrug): Promise<MsgSendSendDrugResponse> {
    const data = MsgSendSendDrug.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Msg", "SendSendDrug", data);
    return promise.then((data) => MsgSendSendDrugResponse.decode(new _m0.Reader(data)));
  }

  SendDestroyDrug(request: MsgSendDestroyDrug): Promise<MsgSendDestroyDrugResponse> {
    const data = MsgSendDestroyDrug.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Msg", "SendDestroyDrug", data);
    return promise.then((data) => MsgSendDestroyDrugResponse.decode(new _m0.Reader(data)));
  }

  SendAllowShip(request: MsgSendAllowShip): Promise<MsgSendAllowShipResponse> {
    const data = MsgSendAllowShip.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Msg", "SendAllowShip", data);
    return promise.then((data) => MsgSendAllowShipResponse.decode(new _m0.Reader(data)));
  }

  SendForbidShip(request: MsgSendForbidShip): Promise<MsgSendForbidShipResponse> {
    const data = MsgSendForbidShip.encode(request).finish();
    const promise = this.rpc.request("traceability.traceability.Msg", "SendForbidShip", data);
    return promise.then((data) => MsgSendForbidShipResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
