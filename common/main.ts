import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import * as admin from 'firebase-admin'
import config, { override } from './config'
import  { BootstrapAppOptions } from './const'

require('dotenv-safe').config({
  allowEmptyValues: true
})

const firebaseConfig = {
  projectId: config.googleCloudProject,
  databaseURL: config.googleCloudDatabaseUrl,
  storageBucket: config.googleCloudStorageBucket
}

export default async function bootstrap(module: object, options: BootstrapAppOptions) {
  const app = await NestFactory.create<NestExpressApplication>(module)

  app.use('/', async (req, res, next) => {
    if (req.url === '/' && req.method === 'GET') {
      res.sendStatus(200)
    } else if (req.url === '/health' && req.method === 'GET') {
      res.sendStatus(200)
    } else if (req.url === `/${options.route}/health` && req.method === 'GET') {
      res.sendStatus(200)
    } else {
      next()
    }
  })

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      whitelist: options.paramWhiteList,
      forbidNonWhitelisted: options.paramForbidNonWhiteList
    })
  )


  // Firestore Connection
  admin.initializeApp(firebaseConfig)
  admin.firestore().settings({ ignoreUndefinedProperties: true })

  app.setGlobalPrefix(options.route)

  // Starts listening for shutdown hooks
  app.enableShutdownHooks()

  const PORT = config.mode === 'dev' || override ? options.port : process.env.APP_PORT || 3000
  app.listen(PORT)

  console.info(`Started listening on PORT: ${PORT}`)

  return app
}
