import { model, Schema } from 'mongoose'
import { TSlot } from './slot.interface'
import { BookingStatus } from './slot.constant'

const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    startTime: {
      type: String,
      required: true,
      trim: true,
    },
    endTime: {
      type: String,
      required: true,
      trim: true,
    },
    isBooked: {
      type: String,
      enum: BookingStatus,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Slot = model<TSlot>('Slot', slotSchema)
