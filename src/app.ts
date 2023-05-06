import express from 'express'
import serverless from 'serverless-http'
import { userRouter } from './routes/user';
import { GeneralAppErrorHandler } from './http/errors/handlers/general-app-error-handler';
import { NotFoundErrorHandler } from './http/errors/handlers/not-fount-error-handler';

const app = express()

app.use(express.json());

app.use('/user', userRouter)

app.use(NotFoundErrorHandler);

app.use(GeneralAppErrorHandler)

if (process.env.SERVER === 'express') {
	app.listen(3000, () => console.log('🎉 Server running at port 3000'))
}
export const handler = serverless(app);
