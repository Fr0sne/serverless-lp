import { DynamoUserRepository } from "./user/dynamo-user-repository";
import { InMemoryUserRepository } from "./user/in-memory-user-repository";
import 'dotenv/config'

export const CurrentDatabaseProvider  = {
	user: process.env.NODE_ENV === 'test' ? InMemoryUserRepository: DynamoUserRepository
}