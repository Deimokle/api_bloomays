import { Request, Response, NextFunction } from 'express'
import HttpException from './httpException'

export const processRouteJson = (callback: (...args) => Promise<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await callback(req, res, next)
      res.json(data)
    } catch (e: Error | HttpException | any) {
      console.log(
        JSON.stringify({
          route: req.originalUrl,
          error: e.errorCode,
          message: e.message,
        }),
      )
      const status = e.errorCode || 500
      const isProduction = process.env.NODE_ENV === 'production'
      if (status === 500 && isProduction) {
        console.error(e)
        res
          .status(status)
          .json({ status: 'error', ...e, message: 'Internal server error' })
      } else {
        console.error(e)
        res.status(status).json({ status: 'error', ...e, message: e.message })
      }
    }
  }
}
