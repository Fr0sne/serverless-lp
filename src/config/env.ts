import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
	region: z.string(),
	tableName: z.string(),
	secretKey: z.string(),
	accessKey: z.string(),
	lambdaService: z.string()
})


export const env = envSchema.parse({
	region: process.env.APP_AWS_REGION,
	tableName: process.env.APP_AWS_DYNAMODB_TABLE_NAME,
	secretKey: process.env.APP_AWS_SECRET_KEY,
	accessKey: process.env.APP_AWS_ACCESS_KEY,
	lambdaService: process.env.APP_AWS_LAMBDA_SERVICE_NAME,
})

