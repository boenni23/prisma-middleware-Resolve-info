import * as path from 'path'
const http = require('http')

import { yogaEject, makePrismaSchema, express } from 'yoga'
import { ApolloServer } from 'apollo-server-express'
import { applyMiddleware } from 'graphql-middleware'

import * as types from './graphql'
import context from './context'

import datamodelInfo from '../.yoga/nexus-prisma'
import { Prisma } from '../.yoga/prisma-client'
import triggers from './triggers'
import bodyParser = require('body-parser')

const prisma = new Prisma({
  endpoint: process.env.PRISMA_URI || `http://localhost:4466`,
  // debug: true,
})

export default yogaEject({
  async server() {
    const schema = makePrismaSchema({
      types,
      prisma: {
        datamodelInfo,
        client: prisma,
      },
      outputs: {
        schema: path.join(__dirname, './schema.graphql'),
        typegen: path.join(__dirname, '../.yoga/nexus.ts'),
      },
      nonNullDefaults: {
        input: true,
        output: true,
      },
      typegenAutoConfig: {
        sources: [
          {
            source: path.join(__dirname, './context.ts'),
            alias: 'ctx',
          },
          {
            source: path.join(__dirname, '../.yoga/prisma-client/index.ts'),
            alias: 'prisma',
          },
          ,
        ],
        contextType: 'ctx.Context',
      },
    })

    const schemaWithMiddleware = applyMiddleware(
      schema,
      //@ts-ignore
      triggers,
    )

    const apolloServer = new ApolloServer({
      schema: schemaWithMiddleware,
      context,
      introspection: true,
      playground: true,
    })
    const app = express()
    const httpServer = http.createServer(app)

    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    apolloServer.applyMiddleware({ app, path: '/' })
    apolloServer.installSubscriptionHandlers(httpServer)
    console.log(apolloServer.subscriptionsPath)

    return httpServer
  },
  async startServer(app) {
    return app.listen({ port: 80 }, () => {
      console.log(`🚀  Server ready at http://localhost:80/`)
    })
  },
  async stopServer(http) {
    http.close()
  },
})
