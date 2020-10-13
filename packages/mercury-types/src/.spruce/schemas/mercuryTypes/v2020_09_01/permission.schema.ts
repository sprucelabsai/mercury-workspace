import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import defaultsByRoleSchema from '#spruce/schemas/mercuryTypes/v2020_09_01/defaultsByRole.schema'
import statusFlagsSchema from '#spruce/schemas/mercuryTypes/v2020_09_01/statusFlags.schema'

const permissionSchema: SpruceSchemas.MercuryTypes.v2020_09_01.IPermissionSchema  = {
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
	                options: {schema: defaultsByRoleSchema,}
	            },
	            /** . */
	            'can': {
	                type: 'schema',
	                options: {schema: statusFlagsSchema,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionSchema)

export default permissionSchema
