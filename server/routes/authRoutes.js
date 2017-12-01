/**
 * Created by rejhan on 27.11.2017.
 */
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt-nodejs')
var User = require('../models/User.js')
var express = require('express')
var router = express.Router()

    router.post('/register',function(req, res) {
         var registerData = req.body;
         var user = new User(registerData)
         user.save((err,newUser)=>{
            if(err)
             res.status(500).send({ message: 'Error saving user'})


            var payload = {sub: newUser._id}
            // in prod load from config file
            var token = jwt.encode(payload,'123');
            res.status(200).send({token})
         })
    })

    router.post('/login',async (req, res) => {
        var loginData = req.body;
        var user = await User.findOne({email: loginData.email})

         if(!user)
             return res.status(401).send({message: 'Email or password invalid'})

        bcrypt.compare(loginData.password,user.password,(err,isMatch)=> {
        if(!isMatch)
            return res.status(401).send({message: 'Email or password invalid'})

         var payload = {sub: user._id}
        // in prod load from config file
         var token = jwt.encode(payload,'123');
         res.status(200).send({token:token,user:user.name})
        })
    })

    router.get('/users',require('./authMiddleware'),async (req, res) =>{
        try {
            var users = await User.find({},'-password -__v')
            res.send(users)
        }catch (error){
            console.log(error)
            res.sendStatus(500)
        }
    })

    // get User details
    router.get('/profile',require('./authMiddleware'),async (req, res) =>{
        try {
            var user = await User.findById(req.userId,'-password -__v')
            res.status(200).send(user)
        }catch (error){
            console.log(error)
            res.sendStatus(500)
        }
    })

module.exports = router