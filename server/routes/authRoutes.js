/**
 * Created by rejhan on 27.11.2017.
 */
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt-nodejs')
var User = require('../models/User.js')


module.exports = (app) =>  {

    // authenticated midlleware
    function checkAuthenticated(req,res,next){

        if(!req.header('authorization')){
            console.log("missing auth")
            res.status(401).send({message: 'Unauthorized. Missing Auht Header'})

        }
        // becasue of "token" spearation on client side see authInterceptor
        var token = req.header('authorization').split(' ')[1]
        console.log(token)

        var payload = jwt.decode(token,'123');

        if(!payload)
            return res.status(401).send({message: 'Unauthorized. Auth Header Invalid'})

        req.userId = payload.sub
        console.log(payload)
        next()
    }

    app.post('/register',(req, res) => {
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

    app.get('/users',checkAuthenticated,async (req, res) =>{
        try {
            console.log(req.userId)
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
            res.status(200).send(user)
        }catch (error){
        console.log(error)
        res.sendStatus(500)
        }
    })

    app.post('/login',async (req, res) => {
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
         res.status(200).send({token})
    })
})
}