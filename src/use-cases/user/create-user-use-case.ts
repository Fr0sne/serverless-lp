export class CreateUserUseCase implements ICreateUserUseCase {
	constructor(private userRepository: IUserRepository) { }
	async execute(data: User) {
		const result = await this.userRepository.create(data)
		return result
	}
}