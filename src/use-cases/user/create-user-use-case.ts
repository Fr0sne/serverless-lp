import { BaseAppError } from "../../http/errors/base-app-error";
import { userSchema } from "../../validations/user";

export class CreateUserUseCase implements ICreateUserUseCase {
	constructor(private userRepository: IUserRepository) { }
	async execute(data: User) {
		const result = await this.userRepository.create(data)

		const validateUser = userSchema.safeParse(data);

		if (!validateUser.success) throw new BaseAppError('Invalid Params', 400)

		return result
	}
}