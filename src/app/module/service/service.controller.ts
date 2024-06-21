/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { serviceService } from './service.service'

const serviceCreate = catchAsync(async (req, res, next) => {
  const serviceData = req.body
  const result = await serviceService.createService(serviceData)
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service created successfully',
    data: result,
  })
})

const serviceGet = catchAsync(async (req, res, next) => {
  const result = await serviceService.getService()
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Services retrieved successfully',
    data: result,
  })
})

const serviceGetById = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await serviceService.getServiceById(id)
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service retrieved successfully',
    data: result,
  })
})

const serviceUpdateById = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const updateData = req.body
  const result = await serviceService.updateServiceById(id, updateData)
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Service retrieved successfully',
    data: result,
  })
})

export const serviceController = {
  serviceCreate,
  serviceGetById,
  serviceGet,
  serviceUpdateById,
}
