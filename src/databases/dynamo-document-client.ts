import { DynamoDB } from 'aws-sdk'
import { env } from '../config/env'


const { accessKey: accessKeyId, region, secretKey: secretAccessKey } = env

export class DynamoDocumentClient extends DynamoDB.DocumentClient {
	constructor(private tableName: string) {
		super({
			accessKeyId,
			secretAccessKey,
			region
		})
	}

	async createItem(data: { [k: string]: any }) {
		const result = await this.put({
			TableName: this.tableName,
			Item: {
				...data
			}
		}).promise()
		return data
	}
}