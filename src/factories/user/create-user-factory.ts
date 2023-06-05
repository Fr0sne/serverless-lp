import { CurrentDatabaseProvider } from "../../repositories/database-provider";
import { CreateUserUseCase } from "../../use-cases/user/create-user-use-case";
import 'dotenv/config'

export function createUserFactory() {
	const userRepository = new CurrentDatabaseProvider.user();

	const createUserUseCase = new CreateUserUseCase(userRepository);

	return createUserUseCase
}