/**
 * Created by rejhan on 25.11.2017.
 */
var express = require('express')
var cors = require('cors')

var app = express()

var posts = [
    {message:'hello'},
    {message:'From Express Server '}
];
app.use(cors())
app.get('/posts',(req, res) => {
       res.send(posts)
})

app.listen(3000)