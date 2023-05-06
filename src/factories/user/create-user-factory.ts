import { DynamoUserRepository } from "../../repositories/user/dynamo-user-repository";
import { CreateUserUseCase } from "../../use-cases/user/create-user-use-case";

export function createUserFactory() {
	const userRepository = new DynamoUserRepository();
	const createUserUseCase = new CreateUserUseCase(userRepository);
	return createUserUseCase
}