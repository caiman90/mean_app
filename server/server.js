/**
 * Created by rejhan on 25.11.2017.
 */
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose= require('mongoose')
var jwt = require('jwt-simple')
var app = express()

var User = require('./models/User.js')
mongoose.Promise = Promise
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
app.get('/users',async (req, res) =>{
    try {
        var users = await User.find({},'-password -__v')
        res.send(users)
    }catch (error){
        console.log(error)
        res.sendStatus(500)
    }
})
app.get('/profile/:id',async (req, res) =>{
    try {
        var user = await User.findById(req.params.id,'-password -__v')
        res.send(user)
    }catch (error){
        console.log(error)
        res.sendStatus(500)
    }
    res.sendStatus(200)
})
app.post('/login',async (req, res) => {
    var userData = req.body;
    console.log(userData)
    var user = await User.findOne({email: userData.email})

    if(!user)
        return res.status(401).send({message: 'Email or password invalid'})

    if(userData.password != user.password)
        return res.status(401).send({message: 'Email or password invalid'})

    var payload = {}
    // in prod loac from config file
    var token = jwt.encode(payload,'123');

    console.log(token)
    res.status(200).send({token})

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