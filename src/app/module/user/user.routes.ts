import { Router } from 'express'
import { userController } from './user.controller'
import { schemaValidation } from '../../middleware/validationData'
import { userValidation } from './user.validation'

const routes = Router()

routes.post(
  '/signup',
  schemaValidation(userValidation.createUserValidationSchema),
  userController.registerUser,
)
routes.post('/login', userController.loggedUser)

export const userRoute = routes
