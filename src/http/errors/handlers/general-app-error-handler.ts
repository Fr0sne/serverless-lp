import { NextFunction, Request, Response } from "express"
import { BaseAppError } from "../base-app-error"

export function GeneralAppErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	if (err instanceof BaseAppError) {
		return res.status(err.statusCode).send({ message: err.message })
	}
	return res.status(500).send({ message: 'Internal server error' })
}