import { SpruceSchemas } from '../../schemas.types'
import FieldType from '#spruce/schemas/fields/fieldTypeEnum'

import eventSignatureSchema from '#spruce/schemas/local/v2020_09_01/eventSignature.schema'

const mercuryContractSchema: SpruceSchemas.Local.v2020_09_01.IMercuryContractSchema  = {
	id: 'mercuryContract',
	name: 'Mercury Contract',
	dynamicKeySignature: { 
	    type: FieldType.Schema,
	    key: 'eventNameWithOptionalNamespace',
	    options: {schema: eventSignatureSchema,}
	}}

export default mercuryContractSchema
