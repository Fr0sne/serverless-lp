import { randomUUID } from "crypto"

export class InMemoryUserRepository implements IUserRepository {
	users: User[] = []
	async create(data: User): Promise<User> {
		const user = {
			id: randomUUID(),
			...data
		}
		this.users.push(user)
		return user
	}

}