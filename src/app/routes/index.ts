import { Router } from 'express'
import { userRoute } from '../module/user/user.routes'
import { serviceRoute } from '../module/service/service.routes'

const middlewareRoutes = Router()

const allRoutes = [
  {
    path: '/auth',
    router: userRoute,
  },
  {
    path: '/services',
    router: serviceRoute,
  },
]

allRoutes.forEach(route => middlewareRoutes.use(route.path, route.router))

export default middlewareRoutes
