import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

export const schemaValidation = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData = await schema.parseAsync(req.body)
      req.body = parsedData
      next()
    } catch (error) {
      next(error)
    }
  }
}
