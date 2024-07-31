export const BookingStatus = ['available', 'booked', 'canceled']

export const bookedStatus = {
  Available: 'available',
  Booked: 'booked',
  Canceled: 'canceled',
} as const

export const slotDefine = (
  startTime: string,
  endTime: string,
  serviceDuration: number,
) => {
  const convertedTime = (time: string) => {
    const hoursMin = time.split(/[.:]/)
    const convertNumberHours = Number(hoursMin[0])
    const convertNumberMin = Number(hoursMin[1])
    return convertNumberHours + convertNumberMin
  }

  const timeStart = convertedTime(startTime) * serviceDuration
  const timeEnd = convertedTime(endTime) * serviceDuration

  const totalDurtation = timeEnd - timeStart

  const availableSlot = totalDurtation / serviceDuration

  const slots = []
  for (let i = 0; i < availableSlot; i++) {
    const slotStartTime = timeStart + i * serviceDuration
    const slotendTime = slotStartTime + serviceDuration

    const converMinsToHours = slotStartTime / serviceDuration
    const converMinsToMins = slotendTime / serviceDuration

    slots.push({
      startTime: `${converMinsToHours}:00`,
      endTime: `${converMinsToMins}:00`,
    })
  }
  return slots
}
