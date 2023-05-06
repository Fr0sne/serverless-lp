import { randomUUID } from 'crypto'
import { DynamoDocumentClient } from '../../databases/dynamo-document-client'
import 'dotenv/config'
import { env } from '../../config/env'

export class DynamoUserRepository extends DynamoDocumentClient implements IUserRepository {
	constructor() {
		super(env.tableName)
	}

	async create({ email, name, phone, state }: User) {
		const user = {
			id: randomUUID(),
			created_at: new Date().toISOString(),
			email,
			name,
			phone,
			state
		}
		await super.createItem(user)
		return user
	}

}