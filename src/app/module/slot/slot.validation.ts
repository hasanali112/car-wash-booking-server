import { z } from 'zod'
import { BookingStatus } from './slot.constant'

const slotValidationSchema = z.object({
  service: z.string(),
  date: z.string().date(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.enum([...BookingStatus] as [string, ...string[]]).optional(),
})

export const SlotValidation = {
  slotValidationSchema,
}
