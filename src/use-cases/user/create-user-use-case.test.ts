import {beforeEach, describe, expect, it, test} from 'vitest'
import { InMemoryUserRepository } from '../../repositories/user/in-memory-user-repository';
import { CreateUserUseCase } from './create-user-use-case';
import { BaseAppError } from '../../http/errors/base-app-error';
import { ZodError } from 'zod';


let userRepository: IUserRepository;
let createUserUseCase: CreateUserUseCase;
beforeEach(() => {
	userRepository = new InMemoryUserRepository()
	createUserUseCase = new CreateUserUseCase(userRepository)
})

describe('create-user-use-case-test', () => {
	it('Should be able to create user',   async () => {
		const userData: User = { 
			email: 'gdart.png@gmail.com',
			name: 'Gabriel Davi',
			phone: '718888888',
			state: 'Bahia'
		} 

		const user = await createUserUseCase.execute(userData)
		
		expect(user).toMatchObject({...userData, id: expect.any(String)})
	})

	it('Should not be able to create a user without required params',   async () => {
		const userData: Partial<User> = { 
			email: 'gdart.png@gmail.com',
			phone: '71996755186',
			state: 'Bahia'
		} 
		
		expect(createUserUseCase.execute(userData as User)).rejects.toThrowError(BaseAppError);
	})

})