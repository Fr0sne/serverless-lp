export class BaseAppError extends Error {
	constructor(message: string, readonly statusCode: number) {
		super(message)
	}
}