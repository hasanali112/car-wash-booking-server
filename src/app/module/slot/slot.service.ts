import { Service } from '../service/service.model'
import { bookedStatus, slotDefine } from './slot.constant'
import { TSlot } from './slot.interface'
import { Slot } from './slot.model'

const createSlotIntoDB = async (payload: TSlot) => {
  const { service, startTime, endTime } = payload

  const isExistService = await Service.findById(service)

  if (!isExistService) {
    throw new Error('This service is not found')
  }

  const serviceDuration = isExistService.duration

  const timeSlots = slotDefine(startTime, endTime, serviceDuration)

  const results = []

  for (const slot of timeSlots) {
    const result = await Slot.create({
      ...payload,
      isBooked: bookedStatus.Available,
      startTime: slot.startTime,
      endTime: slot.endTime,
    })
    results.push(result)
  }

  return results
}

const getSlotIntoDB = async () => {
  const result = await Slot.find().populate('service')
  return result
}

export const SlotService = {
  createSlotIntoDB,
  getSlotIntoDB,
}
