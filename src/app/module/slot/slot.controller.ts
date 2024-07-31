import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { SlotService } from './slot.service'

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotService.createSlotIntoDB(req.body)
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot created successfully',
    data: result,
  })
})

const getAllSlot = catchAsync(async (req, res) => {
  const result = await SlotService.getSlotIntoDB()
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slot retrived successfully',
    data: result,
  })
})

export const SlotController = {
  createSlot,
  getAllSlot,
}
