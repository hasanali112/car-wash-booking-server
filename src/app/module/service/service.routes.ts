import { Router } from 'express'
import { serviceController } from './service.controller'
import { schemaValidation } from '../../middleware/validationData'
import { serviceValidation } from './service.validation'

const routes = Router()

routes.post(
  '/',
  schemaValidation(serviceValidation.createServiceValidation),
  serviceController.serviceCreate,
)

routes.get('/:id', serviceController.serviceGetById)
routes.get('/', serviceController.serviceGet)
routes.put(
  '/:id',
  schemaValidation(serviceValidation.updateServiceValidation),
  serviceController.serviceUpdateById,
)

routes.patch('/:id', serviceController.serviceDeleteById)

export const serviceRoute = routes
