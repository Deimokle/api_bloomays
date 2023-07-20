import { NextFunction, Request, Response } from 'express'
import { getTimestampInSeconds } from '#utils/date'

export const loggerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(`${getTimestampInSeconds()} Route: ${req.originalUrl}`)
  return next()
}
