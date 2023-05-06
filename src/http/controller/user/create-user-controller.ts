import { NextFunction, Request, Response } from 'express'
import { createUserFactory } from '../../../factories/create-user-factory';
import { z } from 'zod'
import { BaseAppError } from '../../errors/base-app-error';

const userSchema = z.object({
	name: z.string(),
	email: z.string(),
	phone: z.string(),
	state: z.string()
})
export async function createUserController(request: Request, response: Response, next: NextFunction) {

	try {

		const createUserUseCase = createUserFactory()

		const validateUser = userSchema.safeParse(request.body);

		if (!validateUser.success) throw new BaseAppError('Invalid Params', 400)

		await createUserUseCase.execute(validateUser.data);

		return response.status(201).send()

	} catch (err) {

		next(err)

	}
}