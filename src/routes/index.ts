import { Router } from 'express'

import pingRouter from './ping'
import v1Router from './v1'

const router = Router()

router.use(pingRouter)
router.use('/v1', v1Router.public)
router.use('/v1', v1Router.private)

export default router
