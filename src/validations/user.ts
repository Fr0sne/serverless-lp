import { z } from 'zod' 

export const userSchema = z.object({
	name: z.string(),
	email: z.string(),
	phone: z.string(),
	state: z.string()
})