/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'


declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.MercuryTypes.v2020_09_01 {

		
		interface IPermission {
			
				/** Permission name. Hyphen separated name for this permission, e.g. can-unlock-doors */
				'name': string
				/** Require all statuses. */
				'requireAllStatuses'?: boolean| undefined | null
				
				'defaultsByRoleBase'?: SpruceSchemas.MercuryTypes.v2020_09_01.IDefaultsByRole| undefined | null
				
				'can'?: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlags| undefined | null
		}

		interface IPermissionSchema extends SpruceSchema.ISchema {
			id: 'permission',
			version: 'v2020_09_01',
			namespace: 'MercuryTypes',
			name: 'Permission',
			    fields: {
			            /** Permission name. Hyphen separated name for this permission, e.g. can-unlock-doors */
			            'name': {
			                label: 'Permission name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Hyphen separated name for this permission, e.g. can-unlock-doors',
			                options: undefined
			            },
			            /** Require all statuses. */
			            'requireAllStatuses': {
			                label: 'Require all statuses',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'defaultsByRoleBase': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IDefaultsByRoleSchema,}
			            },
			            /** . */
			            'can': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema,}
			            },
			    }
		}

		type PermissionEntity = SchemaEntity<SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionSchema>

	}


	namespace SpruceSchemas.MercuryTypes.v2020_09_01 {

		
		interface IPermissionContract {
			
				
				'requireAllPermissions'?: boolean| undefined | null
				
				'permissions': SpruceSchemas.MercuryTypes.v2020_09_01.IPermission[]
		}

		interface IPermissionContractSchema extends SpruceSchema.ISchema {
			id: 'permissionContract',
			version: 'v2020_09_01',
			namespace: 'MercuryTypes',
			name: 'Permission Contract',
			    fields: {
			            /** . */
			            'requireAllPermissions': {
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionSchema,}
			            },
			    }
		}

		type PermissionContractEntity = SchemaEntity<SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionContractSchema>

	}


	namespace SpruceSchemas.MercuryTypes.v2020_09_01 {

		
		interface IEventSignature {
			
				
				'eventNameWithOptionalNamespace': string
				
				'responsePayload'?: (SpruceSchema.ISchema)| undefined | null
				
				'emitPayload'?: (SpruceSchema.ISchema)| undefined | null
				
				'listenPermissionContract'?: SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionContract[]| undefined | null
				
				'emitPermissionContract'?: SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionContract[]| undefined | null
		}

		interface IEventSignatureSchema extends SpruceSchema.ISchema {
			id: 'eventSignature',
			version: 'v2020_09_01',
			namespace: 'MercuryTypes',
			name: 'Event Signature',
			    fields: {
			            /** . */
			            'eventNameWithOptionalNamespace': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'responsePayload': {
			                type: 'raw',
			                options: {valueType: `SpruceSchema.ISchema`,}
			            },
			            /** . */
			            'emitPayload': {
			                type: 'raw',
			                options: {valueType: `SpruceSchema.ISchema`,}
			            },
			            /** . */
			            'listenPermissionContract': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionContractSchema,}
			            },
			            /** . */
			            'emitPermissionContract': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionContractSchema,}
			            },
			    }
		}

		type EventSignatureEntity = SchemaEntity<SpruceSchemas.MercuryTypes.v2020_09_01.IEventSignatureSchema>

	}


	namespace SpruceSchemas.MercuryTypes.v2020_09_01 {

		
		interface IMercuryContract {
			
				
				'eventSignatures': SpruceSchemas.MercuryTypes.v2020_09_01.IEventSignature[]
		}

		interface IMercuryContractSchema extends SpruceSchema.ISchema {
			id: 'mercuryContract',
			version: 'v2020_09_01',
			namespace: 'MercuryTypes',
			name: 'Mercury Contract',
			    fields: {
			            /** . */
			            'eventSignatures': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IEventSignatureSchema,}
			            },
			    }
		}

		type MercuryContractEntity = SchemaEntity<SpruceSchemas.MercuryTypes.v2020_09_01.IMercuryContractSchema>

	}


	namespace SpruceSchemas.MercuryTypes.v2020_09_01 {

		
		interface IStatusFlags {
			
				/** . What is the fallback if no status is set? */
				'default'?: boolean| undefined | null
				/** Clocked in. Is the person clocked in and ready to rock? */
				'clockedIn'?: boolean| undefined | null
				/** Clocked out. When someone is not working (off the clock). */
				'clockedOut'?: boolean| undefined | null
				/** On premise. Are they at work (maybe working, maybe visiting). */
				'onPrem'?: boolean| undefined | null
				/** Off premise. They aren't at the office or shop. */
				'offPrem'?: boolean| undefined | null
		}

		interface IStatusFlagsSchema extends SpruceSchema.ISchema {
			id: 'statusFlags',
			version: 'v2020_09_01',
			namespace: 'MercuryTypes',
			name: '',
			    fields: {
			            /** . What is the fallback if no status is set? */
			            'default': {
			                type: 'boolean',
			                hint: 'What is the fallback if no status is set?',
			                options: undefined
			            },
			            /** Clocked in. Is the person clocked in and ready to rock? */
			            'clockedIn': {
			                label: 'Clocked in',
			                type: 'boolean',
			                hint: 'Is the person clocked in and ready to rock?',
			                options: undefined
			            },
			            /** Clocked out. When someone is not working (off the clock). */
			            'clockedOut': {
			                label: 'Clocked out',
			                type: 'boolean',
			                hint: 'When someone is not working (off the clock).',
			                options: undefined
			            },
			            /** On premise. Are they at work (maybe working, maybe visiting). */
			            'onPrem': {
			                label: 'On premise',
			                type: 'boolean',
			                hint: 'Are they at work (maybe working, maybe visiting).',
			                options: undefined
			            },
			            /** Off premise. They aren't at the office or shop. */
			            'offPrem': {
			                label: 'Off premise',
			                type: 'boolean',
			                hint: 'They aren\'t at the office or shop.',
			                options: undefined
			            },
			    }
		}

		type StatusFlagsEntity = SchemaEntity<SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema>

	}


	namespace SpruceSchemas.MercuryTypes.v2020_09_01 {

		
		interface IDefaultsByRole {
			
				/** Owner. */
				'owner'?: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlags| undefined | null
				/** Group manager. */
				'groupManager'?: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlags| undefined | null
				/** Manager. */
				'manager'?: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlags| undefined | null
				/** Teammate. */
				'teammate'?: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlags| undefined | null
				/** Guest. */
				'guest'?: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlags| undefined | null
		}

		interface IDefaultsByRoleSchema extends SpruceSchema.ISchema {
			id: 'defaultsByRole',
			version: 'v2020_09_01',
			namespace: 'MercuryTypes',
			name: '',
			    fields: {
			            /** Owner. */
			            'owner': {
			                label: 'Owner',
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema,}
			            },
			            /** Group manager. */
			            'groupManager': {
			                label: 'Group manager',
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema,}
			            },
			            /** Manager. */
			            'manager': {
			                label: 'Manager',
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema,}
			            },
			            /** Teammate. */
			            'teammate': {
			                label: 'Teammate',
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema,}
			            },
			            /** Guest. */
			            'guest': {
			                label: 'Guest',
			                type: 'schema',
			                options: {schema: SpruceSchemas.MercuryTypes.v2020_09_01.IStatusFlagsSchema,}
			            },
			    }
		}

		type DefaultsByRoleEntity = SchemaEntity<SpruceSchemas.MercuryTypes.v2020_09_01.IDefaultsByRoleSchema>

	}

}
