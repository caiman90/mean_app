/**
 * Created by rejhan on 25.11.2017.
 */
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()

app.use(cors())
app.use(bodyParser.json())

require('./routes/authRoutes')(app)
require('./routes/mainRoutes')(app)
require('./db')()

app.listen(3000,() => {
        console.log("Server has been started")
})