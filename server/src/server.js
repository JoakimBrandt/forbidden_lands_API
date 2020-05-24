const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const awilix = require('awilix')
const port = process.env.NODE_PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

app.use(function(request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    next()
  })

const container = awilix.createContainer()
const servantsRouter = require('./routers/servants-router')
const servantsManager = require('./bll/servants-manager')
const servantsRepository = require('./dal/servants-repository')

container.register('servantsRouter', awilix.asFunction(servantsRouter))
container.register('servantsManager', awilix.asFunction(servantsManager))
container.register('servantsRepository', awilix.asFunction(servantsRepository))

container.register('servants', awilix.asFunction(servantsRouter))

const servantsApi = container.resolve('servants')

app.use('/servants', servantsApi)

app.listen(port, () => {
    console.log("App listening on port")
})
