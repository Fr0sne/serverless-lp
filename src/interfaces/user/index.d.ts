declare interface User {
	id?: string,
	name: string,
	email: string,
	phone: string,
	state: string
}

declare interface ICreateUserUseCase {
	execute(data: User): Promise<User>
}

declare interface IUserRepository {
	create(data: User): Promise<User>
}