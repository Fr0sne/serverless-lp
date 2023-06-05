import { NextFunction, Request, Response } from 'express'
import { createUserFactory } from '../../../factories/user/create-user-factory';


export async function createUserController(request: Request, response: Response, next: NextFunction) {

	try {

		const createUserUseCase = createUserFactory()

		await createUserUseCase.execute(request.body);

		return response.status(201).send()

	} catch (err) {

		next(err)

	}
}