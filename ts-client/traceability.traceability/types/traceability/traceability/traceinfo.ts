/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "traceability.traceability";

export interface Traceinfo {
  id: number;
  dic: string;
  drugprof: string;
  pharmacy: string;
  termofvalidity: string;
  state: string;
  manufacturer: string;
}

function createBaseTraceinfo(): Traceinfo {
  return { id: 0, dic: "", drugprof: "", pharmacy: "", termofvalidity: "", state: "", manufacturer: "" };
}

export const Traceinfo = {
  encode(message: Traceinfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.dic !== "") {
      writer.uint32(18).string(message.dic);
    }
    if (message.drugprof !== "") {
      writer.uint32(26).string(message.drugprof);
    }
    if (message.pharmacy !== "") {
      writer.uint32(34).string(message.pharmacy);
    }
    if (message.termofvalidity !== "") {
      writer.uint32(42).string(message.termofvalidity);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    if (message.manufacturer !== "") {
      writer.uint32(58).string(message.manufacturer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Traceinfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceinfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.dic = reader.string();
          break;
        case 3:
          message.drugprof = reader.string();
          break;
        case 4:
          message.pharmacy = reader.string();
          break;
        case 5:
          message.termofvalidity = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        case 7:
          message.manufacturer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Traceinfo {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      dic: isSet(object.dic) ? String(object.dic) : "",
      drugprof: isSet(object.drugprof) ? String(object.drugprof) : "",
      pharmacy: isSet(object.pharmacy) ? String(object.pharmacy) : "",
      termofvalidity: isSet(object.termofvalidity) ? String(object.termofvalidity) : "",
      state: isSet(object.state) ? String(object.state) : "",
      manufacturer: isSet(object.manufacturer) ? String(object.manufacturer) : "",
    };
  },

  toJSON(message: Traceinfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.dic !== undefined && (obj.dic = message.dic);
    message.drugprof !== undefined && (obj.drugprof = message.drugprof);
    message.pharmacy !== undefined && (obj.pharmacy = message.pharmacy);
    message.termofvalidity !== undefined && (obj.termofvalidity = message.termofvalidity);
    message.state !== undefined && (obj.state = message.state);
    message.manufacturer !== undefined && (obj.manufacturer = message.manufacturer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Traceinfo>, I>>(object: I): Traceinfo {
    const message = createBaseTraceinfo();
    message.id = object.id ?? 0;
    message.dic = object.dic ?? "";
    message.drugprof = object.drugprof ?? "";
    message.pharmacy = object.pharmacy ?? "";
    message.termofvalidity = object.termofvalidity ?? "";
    message.state = object.state ?? "";
    message.manufacturer = object.manufacturer ?? "";
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
