import { model, Schema } from 'mongoose'
import { TBooking } from './booking.interface'
import { VehicleType } from './booking.constant'

const bookingSchema = new Schema<TBooking>({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    trim: true,
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
    trim: true,
  },
  slot: {
    type: Schema.Types.ObjectId,
    ref: 'Slot',
    required: true,
    trim: true,
  },
  vehicleType: {
    type: String,
    enum: [...VehicleType],
    required: true,
    trim: true,
  },
  vehicleBrand: { type: String, required: true, trim: true },
  vehicleModel: { type: String, required: true, trim: true },
  manufacturingYear: { type: Number, required: true, trim: true },
  registrationPlate: { type: String, required: true, trim: true },
})

export const Booking = model<TBooking>('Booking', bookingSchema)
