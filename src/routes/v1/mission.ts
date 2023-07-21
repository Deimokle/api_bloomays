import { Router } from 'express'
import { processRouteJson } from '#utils/processRoute'
import { getMissions } from '#controllers/mission'

const router: Router = Router()
const prefixRouter: Router = Router()

const prefixName = '/missions'

/**
 * @openapi
 * /v1/missions/:
 *   get:
 *     tags:
 *       - Mission
 *     description: Get missions
 *     parameters:
 *      - in: body
 *        name: start_date
 *        schema:
 *          type: string
 *        required: true
 *     responses:
 *       200:
 *         description: Return missions from start_date (default is now)
 */
router.route('/').get(processRouteJson(getMissions))

export default prefixRouter.use(prefixName, router)
