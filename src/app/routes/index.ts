import { Router } from 'express'
import { userRoute } from '../module/user/user.routes'
import { serviceRoute } from '../module/service/service.routes'
import { SlotRouter } from '../module/slot/slot.routes'

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
  {
    path: '/services',
    router: SlotRouter,
  },
]

allRoutes.forEach(route => middlewareRoutes.use(route.path, route.router))

export default middlewareRoutes
