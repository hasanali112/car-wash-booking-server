import { z } from 'zod'

const createUserValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  role: z.enum(['admin', 'user']),
  address: z.string(),
})

export const userValidation = {
  createUserValidationSchema,
}
