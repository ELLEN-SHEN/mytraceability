import { Client, registry, MissingWalletError } from 'traceability-client-ts'

import { TraceabilityPacketData } from "traceability-client-ts/traceability.traceability/types"
import { NoData } from "traceability-client-ts/traceability.traceability/types"
import { RequestShipPacketData } from "traceability-client-ts/traceability.traceability/types"
import { RequestShipPacketAck } from "traceability-client-ts/traceability.traceability/types"
import { SendDrugPacketData } from "traceability-client-ts/traceability.traceability/types"
import { SendDrugPacketAck } from "traceability-client-ts/traceability.traceability/types"
import { DestroyDrugPacketData } from "traceability-client-ts/traceability.traceability/types"
import { DestroyDrugPacketAck } from "traceability-client-ts/traceability.traceability/types"
import { AllowShipPacketData } from "traceability-client-ts/traceability.traceability/types"
import { AllowShipPacketAck } from "traceability-client-ts/traceability.traceability/types"
import { ForbidShipPacketData } from "traceability-client-ts/traceability.traceability/types"
import { ForbidShipPacketAck } from "traceability-client-ts/traceability.traceability/types"
import { Params } from "traceability-client-ts/traceability.traceability/types"
import { Traceinfo } from "traceability-client-ts/traceability.traceability/types"


export { TraceabilityPacketData, NoData, RequestShipPacketData, RequestShipPacketAck, SendDrugPacketData, SendDrugPacketAck, DestroyDrugPacketData, DestroyDrugPacketAck, AllowShipPacketData, AllowShipPacketAck, ForbidShipPacketData, ForbidShipPacketAck, Params, Traceinfo };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				Traceinfo: {},
				TraceinfoAll: {},
				
				_Structure: {
						TraceabilityPacketData: getStructure(TraceabilityPacketData.fromPartial({})),
						NoData: getStructure(NoData.fromPartial({})),
						RequestShipPacketData: getStructure(RequestShipPacketData.fromPartial({})),
						RequestShipPacketAck: getStructure(RequestShipPacketAck.fromPartial({})),
						SendDrugPacketData: getStructure(SendDrugPacketData.fromPartial({})),
						SendDrugPacketAck: getStructure(SendDrugPacketAck.fromPartial({})),
						DestroyDrugPacketData: getStructure(DestroyDrugPacketData.fromPartial({})),
						DestroyDrugPacketAck: getStructure(DestroyDrugPacketAck.fromPartial({})),
						AllowShipPacketData: getStructure(AllowShipPacketData.fromPartial({})),
						AllowShipPacketAck: getStructure(AllowShipPacketAck.fromPartial({})),
						ForbidShipPacketData: getStructure(ForbidShipPacketData.fromPartial({})),
						ForbidShipPacketAck: getStructure(ForbidShipPacketAck.fromPartial({})),
						Params: getStructure(Params.fromPartial({})),
						Traceinfo: getStructure(Traceinfo.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getTraceinfo: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Traceinfo[JSON.stringify(params)] ?? {}
		},
				getTraceinfoAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.TraceinfoAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: traceability.traceability initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TraceabilityTraceability.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTraceinfo({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TraceabilityTraceability.query.queryTraceinfo( key.id)).data
				
					
				commit('QUERY', { query: 'Traceinfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTraceinfo', payload: { options: { all }, params: {...key},query }})
				return getters['getTraceinfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTraceinfo API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryTraceinfoAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.TraceabilityTraceability.query.queryTraceinfoAll(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.TraceabilityTraceability.query.queryTraceinfoAll({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'TraceinfoAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryTraceinfoAll', payload: { options: { all }, params: {...key},query }})
				return getters['getTraceinfoAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryTraceinfoAll API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSendSendDrug({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.TraceabilityTraceability.tx.sendMsgSendSendDrug({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendSendDrug:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendSendDrug:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendRequestShip({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.TraceabilityTraceability.tx.sendMsgSendRequestShip({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendRequestShip:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendRequestShip:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendForbidShip({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.TraceabilityTraceability.tx.sendMsgSendForbidShip({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendForbidShip:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendForbidShip:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendDestroyDrug({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.TraceabilityTraceability.tx.sendMsgSendDestroyDrug({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendDestroyDrug:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendDestroyDrug:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSendAllowShip({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.TraceabilityTraceability.tx.sendMsgSendAllowShip({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendAllowShip:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSendAllowShip:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSendSendDrug({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TraceabilityTraceability.tx.msgSendSendDrug({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendSendDrug:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendSendDrug:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendRequestShip({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TraceabilityTraceability.tx.msgSendRequestShip({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendRequestShip:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendRequestShip:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendForbidShip({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TraceabilityTraceability.tx.msgSendForbidShip({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendForbidShip:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendForbidShip:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendDestroyDrug({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TraceabilityTraceability.tx.msgSendDestroyDrug({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendDestroyDrug:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendDestroyDrug:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSendAllowShip({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.TraceabilityTraceability.tx.msgSendAllowShip({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSendAllowShip:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSendAllowShip:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
