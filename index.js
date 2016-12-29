const http = require('http')
const express = require('express')
const path = require('path')
const displayRoutes = require('express-routemap')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8082

const routePort = require('./routes/port')
const routeBlock = require('./routes/block')
const routeIPTables = require('./routes/iptables')

const app = express()
app.use(express.static(path.join(__dirname, '..', 'www')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/iptables', routeIPTables)
app.use('/port', routePort)
app.use('/block', routeBlock)

http.createServer(app).listen(PORT, () => {
  displayRoutes(app)
})
