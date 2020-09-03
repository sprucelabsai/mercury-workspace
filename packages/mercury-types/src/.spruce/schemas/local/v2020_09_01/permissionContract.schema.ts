import { SpruceSchemas } from '../../schemas.types'
import FieldType from '#spruce/schemas/fields/fieldTypeEnum'



const permissionContractSchema: SpruceSchemas.Local.v2020_09_01.IPermissionContractSchema  = {
	id: 'permissionContract',
	name: 'Permission Contract',
	    fields: {
	            /** Clocked in. Is the person clocked in and ready to rock? */
	            'clockedIn': {
	                label: 'Clocked in',
	                type: FieldType.Boolean,
	                hint: 'Is the person clocked in and ready to rock?',
	                options: undefined
	            },
	            /** Clocked out. When someone is not working (off the clock). */
	            'clockedOut': {
	                label: 'Clocked out',
	                type: FieldType.Boolean,
	                hint: 'When someone is not working (off the clock).',
	                options: undefined
	            },
	            /** On premise. Are they at work (maybe working, maybe visiting). */
	            'onPrem': {
	                label: 'On premise',
	                type: FieldType.Boolean,
	                hint: 'Are they at work (maybe working, maybe visiting).',
	                options: undefined
	            },
	            /** Off premise. They aren't at the office or shop. */
	            'offPrem': {
	                label: 'Off premise',
	                type: FieldType.Boolean,
	                hint: 'They aren\'t at the office or shop.',
	                options: undefined
	            },
	    }
}

export default permissionContractSchema
