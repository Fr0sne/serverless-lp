import { NextFunction, Request, Response } from "express";

export function NotFoundErrorHandler(req: Request, res: Response, next: NextFunction) {
	return res.status(404).json({
		error: "Not Found",
	});
}