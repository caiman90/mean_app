/**
 * Created by rejhan on 25.11.2017.
 */
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose= require('mongoose')
var app = express()

var User = require('./models/User.js')

var posts = [
    {message:'hello'},
    {message:'From Express Server '}
];
app.use(cors())
app.use(bodyParser.json())

app.get('/posts',(req, res) => {
       res.send(posts)
})

app.post('/register',(req, res) => {
    var userData = req.body;
    var user = new User(userData)
    user.save((err,result)=>{
        if(err)
            console.log('Error saving user : ' + err)

        res.sendStatus(200)
    })
})

mongoose.connect('mongodb://test:test@ds121726.mlab.com:21726/mean_web_app',{useMongoClient:true},(err)=>{
    if(!err)
        console.log('Connected to Mongo')
    else
        console.log(err)
})
app.listen(3000,() => {
        console.log("Server has been started")
})