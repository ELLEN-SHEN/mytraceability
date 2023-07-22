import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendSendDrug } from "./types/traceability/traceability/tx";
import { MsgSendRequestShip } from "./types/traceability/traceability/tx";
import { MsgSendForbidShip } from "./types/traceability/traceability/tx";
import { MsgSendDestroyDrug } from "./types/traceability/traceability/tx";
import { MsgSendAllowShip } from "./types/traceability/traceability/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/traceability.traceability.MsgSendSendDrug", MsgSendSendDrug],
    ["/traceability.traceability.MsgSendRequestShip", MsgSendRequestShip],
    ["/traceability.traceability.MsgSendForbidShip", MsgSendForbidShip],
    ["/traceability.traceability.MsgSendDestroyDrug", MsgSendDestroyDrug],
    ["/traceability.traceability.MsgSendAllowShip", MsgSendAllowShip],
    
];

export { msgTypes }