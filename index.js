const http = require('http')
const express = require('express')
const path = require('path')
const displayRoutes = require('express-routemap')

const PORT = process.env.PORT || 8082

const routePort = require('./routes/port')
const routeBlock = require('./routes/block')

const app = express()
app.use(express.static(path.join(__dirname, '..', 'www')))

app.use('/port', routePort)
app.use('/block', routeBlock)

http.createServer(app).listen(PORT, () => {
  displayRoutes(app)
})
