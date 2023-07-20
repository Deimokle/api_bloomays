import express, { Router, Request, Response } from 'express'
import { processRouteJson } from '#utils/processRoute'
import { pingController } from '#controllers/ping'

const router: Router = express.Router()

router.route('/ping').get(processRouteJson(pingController))

export default router
