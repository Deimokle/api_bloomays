import 'module-alias/register'
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '#docs/swagger.json'
import routes from '#routes/index'
import config from './config'
import { loggerMiddleware } from './middleware/logger'

// initialize express server
const app: Express = express()
const port: string = config.PORT

app.use(express.json())
app.use(cors())
app.use(loggerMiddleware)
app.use('/', routes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  return console.log(
    `⚡️[server]: Server is running at http://localhost:${port}`,
  )
})

export default app
