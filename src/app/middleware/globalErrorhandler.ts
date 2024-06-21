/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express'
import httpStatus from 'http-status'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = httpStatus.BAD_REQUEST
  const message = err.message || 'Something went wrong'

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
    error: err,
  })
}

export default globalErrorHandler
