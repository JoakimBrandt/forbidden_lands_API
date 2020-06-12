const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const awilix = require('awilix')
const port = process.env.NODE_PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

const container = awilix.createContainer()

// SERVANTS
const servantsRouter = require('./routers/servants-router')
const servantsManager = require('./bll/servants-manager')
const servantsRepository = require('./dal/servants-repository')
container.register('servantsRouter', awilix.asFunction(servantsRouter))
container.register('servantsManager', awilix.asFunction(servantsManager))
container.register('servantsRepository', awilix.asFunction(servantsRepository))
container.register('servants', awilix.asFunction(servantsRouter))
const servantsApi = container.resolve('servants')

// FUNCTIONS
const functionsRouter = require('./routers/functions-router')
const functionsManager = require('./bll/functions-manager')
const functionsRepository = require('./dal/functions-repository')
container.register('functionsRouter', awilix.asFunction(functionsRouter))
container.register('functionsManager', awilix.asFunction(functionsManager))
container.register('functionsRepository', awilix.asFunction(functionsRepository))
container.register('functions', awilix.asFunction(functionsRouter))
const functionsApi = container.resolve('functions')

// FUNCTIONS
const resourcesRouter = require('./routers/resources-router')
const resourcesManager = require('./bll/resources-manager')
const resourcesRepository = require('./dal/resources-repository')
container.register('resourcesRouter', awilix.asFunction(resourcesRouter))
container.register('resourcesManager', awilix.asFunction(resourcesManager))
container.register('resourcesRepository', awilix.asFunction(resourcesRepository))
container.register('resources', awilix.asFunction(resourcesRouter))
const resourcesApi = container.resolve('resources')

// KEEPS
const keepsRouter = require('./routers/keeps-router')
const keepsManager = require('./bll/keeps-manager')
const keepsRepository = require('./dal/keeps-repository')
container.register('keepsRouter', awilix.asFunction(keepsRouter))
container.register('keepsManager', awilix.asFunction(keepsManager))
container.register('keepsRepository', awilix.asFunction(keepsRepository))
container.register('keeps', awilix.asFunction(keepsRouter))
const keepsApi = container.resolve('keeps')

// LAUNCH
app.use('/resources', resourcesApi)
app.use('/functions', functionsApi)
app.use('/servants', servantsApi)
app.use('/keeps', keepsApi)

app.listen(port, () => {
    console.log("App listening on port")
})