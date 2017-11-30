/**
 * Created by rejhan on 25.11.2017.
 */
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()
var auth = require('./routes/authRoutes')
app.use(cors())
app.use(bodyParser.json())

require('./routes/mainRoutes')(app)
require('./models/db')()
app.use('/auth',auth)
app.listen(3000,() => {
        console.log("Server has been started")
})