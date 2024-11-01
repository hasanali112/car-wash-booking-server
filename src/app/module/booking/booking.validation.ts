import { z } from 'zod'
import { VehicleType } from './booking.constant'

const bookingSchema = z.object({
  customer: z.string(),
  service: z.string(),
  slot: z.string(),
  vehicleType: z.enum([...VehicleType] as [string, ...string[]]),
  vehicleBrand: z.string(),
  vehicleModel: z.string(),
  manufacturingYear: z.number().int().min(1900).max(new Date().getFullYear()),
  registrationPlate: z.string(),
})

export const bookingValidation = {
  bookingSchema,
}
