import {beforeEach, describe, expect, it, test} from 'vitest'
import { InMemoryUserRepository } from '../../repositories/user/in-memory-user-repository';


let userRepository: IUserRepository;
beforeEach(() => {
	userRepository = new InMemoryUserRepository()
})

describe('create-user-use-case-test', () => {
	it('Should be able to create user',   async () => {
		const userData: User = { 
			email: 'gdart.png@gmail.com',
			name: 'Gabriel Davi',
			phone: '71996755186',
			state: 'Bahia'
		} 
		const user = await userRepository.create(userData)

		expect(user).toMatchObject({...userData, id: expect.any(String)})
	})

})