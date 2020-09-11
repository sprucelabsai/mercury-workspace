import { buildSchema } from '@sprucelabs/schema'
import FieldType from '#spruce/schemas/fields/fieldTypeEnum'
import { authorizerStatuses } from '../../mercury.types'

export default buildSchema({
	id: 'permissionContract',
	name: 'Permission Contract',
	description: '',
	dynamicFieldSignature: {
		type: FieldType.Schema,
		keyName: 'permissionName',
		isRequired: true,
		options: {
			schema: {
				id: 'permissionAccess',
				name: 'Permission access',
				fields: {
					...authorizerStatuses.reduce((fields, status) => {
						const { name, ...props } = status
						// @ts-ignore
						fields[name] = {
							...props,
							type: FieldType.Boolean,
						}

						return fields
					}, {}),
				},
			},
		},
	},
})
