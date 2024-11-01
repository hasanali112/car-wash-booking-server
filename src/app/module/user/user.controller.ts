/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { userService } from './user.service'
import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import handleRespose from '../../utils/handleResponse'

const registerUser = catchAsync(async (req, res, next) => {
  const data = req.body
  const result = await userService.register(data)
  handleRespose(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User register successfully',
    data: result,
  })
})

const loggedUser = catchAsync(async (req, res, next) => {
  const data = req.body
  const { accessToken, refreshToken, user } = await userService.login(data)

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User loging succesfully',
    toke: accessToken,
    data: user,
  })
})

export const userController = {
  registerUser,
  loggedUser,
}
