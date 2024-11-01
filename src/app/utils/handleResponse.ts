import { Response } from 'express'
import httpStatus from 'http-status'

type TResponse<T> = {
  statusCode: number
  success: boolean
  message: string
  data: T
}

const handleRespose = <T>(res: Response, data: TResponse<T>) => {
  res.status(httpStatus.OK).json({
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data,
  })
}

export default handleRespose
