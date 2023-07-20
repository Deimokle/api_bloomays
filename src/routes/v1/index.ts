import { Router } from 'express'
import MissionRouter from './mission'

const publicRouter = Router()

const privateRouter = Router()
publicRouter.use(MissionRouter)

export default {
  public: publicRouter,
  private: privateRouter,
}
