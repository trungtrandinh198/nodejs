import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import { env } from '~/config/environment.js'
import { APIs } from '~/routes/v1'
import { errorHandlingMiddleware  } from '~/middlewares/errorHandlingMiddleware'
const app = express()


const START_SERVER = async () => {
  app.use(express.json())

  app.use('/v1', APIs)
  
  //Middleware for handling 404 errors

  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Sever is runing at ${ env.APP_HOST }:${ env.APP_PORT }/`)
  })

  exitHook(() => {
    CLOSE_DB
  });
}

CONNECT_DB()
  .then(() => console.log ('Database connected successfully!'))
  .then(()=> START_SERVER())
  .catch(error => {
    console.error('Failed to connect to the database:', error)
    process.exit(1);
  });