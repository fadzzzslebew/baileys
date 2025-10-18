"use strict"

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}

Object.defineProperty(exports, "__esModule", { value: true })

const WAProto_1 = require("../../WAProto")
const auth_utils_1 = require("./auth-utils")
const generics_1 = require("./generics")

/*
* code by Dzk Remixer.. Izin bosque menambahkan metode auth State Versi classic level. heheheh
* Btw ini hanya support di home termux yah, maksudnya ga bisa di luar home termux, kayak di sdcard atau di storage hpmu.. ( tapi kalo di vps mah bisa... kalau ga percaya coba saja )
* My Channel YouTube : @dzkremixerv2
* My Wallet crypto :
** BITCOIN : bc1qdzks9rzhnfq7l54l93mc36g960ks2k3j9kp5r7
** ETHEREUM : 0x19f24feb9359da0d5ebd9c953b587715fc1fea15
** SOLANA : 3kgEiTbjhFb95LzFuKxYYEWCgjYnBM1MqrzM5sAUvRNm
*/

async function useClassicLevelAuthState(db) {
	const writeData = async (key, value) => {
		try {
			const json = JSON.stringify(value, generics_1.BufferJSON.replacer);
			await db.put(key, json);
		} catch {}
	};

	const readData = async (key) => {
		try {
			const raw = await db.get(key);
			return JSON.parse(raw, generics_1.BufferJSON.reviver);
		} catch {}
	};

	const removeData = async (key) => {
		try {
			await db.del(key);
		} catch {}
	}

	const creds = await readData('creds') || auth_utils_1.initAuthCreds()

	return {
		state: {
			creds,
			keys: {
				get: async (type, ids) => {
					let data = {}
					await Promise.all(ids.map(async (id) => {
						let value = await readData(`${type}-${id}`)
						if (type === 'app-state-sync-key' && value) {
							value = WaProto_1.proto.Message.AppStateSyncKeyData.fromObject(value)
						}
						data[id] = value
					}))
					return data
				},
				set: async (data) => {
					let tasks = []
					for (let category in data) {
						for (let id in data[category]) {
							let value = data[category][id]
							let key = `${category}-${id}`
							tasks.push(value ? await writeData(key, value) : await removeData(key))
						}
					}
					await Promise.all(tasks)
				}
			}
		},
		saveCreds: async () => {
			return await writeData('creds', creds)
		}
	};
}

module.exports = {
	useClassicLevelAuthState
}