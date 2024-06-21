import { z } from 'zod'

const createServiceValidation = z.object({
  name: z.string({ required_error: 'Name is requires' }),
  description: z.string({ required_error: 'Name is requires' }),
  price: z.number().nonnegative(),
  duration: z.number(),
  isDeleted: z.boolean().default(false),
})

const updateServiceValidation = z.object({
  name: z.string({ required_error: 'Name is requires' }).optional(),
  description: z.string({ required_error: 'Name is requires' }).optional(),
  price: z.number().nonnegative().optional(),
  duration: z.number().optional(),
  isDeleted: z.boolean().default(false).optional(),
})

export const serviceValidation = {
  createServiceValidation,
  updateServiceValidation,
}
