/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
} from 'express'
import cors from 'cors'
// import { userRoute } from './app/module/user/user.routes'
import middlewareRoutes from './app/routes'
import globalErrorHandler from './app/middleware/globalErrorhandler'
import httpStatus from 'http-status'

const app: Application = express()

// Middleware
app.use(express.json())
app.use(cors())

//applicaton routes
app.use('/api', middlewareRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Car wash service is running successfully',
  })
})

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.BAD_GATEWAY).json({
    success: false,
    statusCode: httpStatus.BAD_GATEWAY,
  })
})

export default app
