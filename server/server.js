/**
 * Created by rejhan on 25.11.2017.
 */
var express = require('express')
var app = express()

app.get('/',(req, res) => {
       res.send('Hello')
})

app.listen(3000)