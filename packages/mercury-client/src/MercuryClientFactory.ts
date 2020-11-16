import { EventContract, MutableEventContract } from '@sprucelabs/mercury-types'
import { ConnectionOptions, MercuryClient } from './client.types'
import { DEFAULT_HOST } from './constants'
import SpruceError from './errors/SpruceError'
import MercurySocketIoClient from './MercurySocketIoClient'
import MutableContractClient from './tests/MutableContractClient'

export default class MercuryClientFactory {
	public static async Client<Contract extends EventContract>(
		connectionOptions: ConnectionOptions
	): Promise<MercuryClient<Contract>> {
		const { host = DEFAULT_HOST, contracts, isTest = false } = connectionOptions

		if (host.substr(0, 4) !== 'http') {
			throw new SpruceError({ code: 'INVALID_PROTOCOL' })
		}

		if (!contracts) {
			throw new SpruceError({
				code: 'MISSING_PARAMETERS',
				parameters: ['contracts'],
			})
		}

		if (!Array.isArray(contracts) || contracts.length === 0) {
			throw new SpruceError({
				code: 'INVALID_PARAMETERS',
				parameters: ['contracts'],
			})
		}

		const unifiedContract: MutableEventContract = {
			eventSignatures: [],
		}

		for (const contract of contracts) {
			const c = contract as MutableEventContract
			unifiedContract.eventSignatures.push(...c.eventSignatures)
		}

		const eventContract: Contract = unifiedContract as any

		const Client = isTest ? MutableContractClient : MercurySocketIoClient

		//@ts-ignore
		const client = new Client<Contract>({
			host,
			reconnection: false,
			rejectUnauthorized: !connectionOptions?.allowSelfSignedCrt,
			eventContract,
		})

		await client.connect()

		return client
	}
}
