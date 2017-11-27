/**
 * Created by rejhan on 27.11.2017.
 */
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt-nodejs')
var User = require('../models/User.js')


module.exports = function(app) {

    app.post('/register',(req, res) => {
         var registerData = req.body;
         var user = new User(registerData)
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

         var payload = {}
             // in prod load from config file
         var token = jwt.encode(payload,'123');
         res.status(200).send({token})
    })
})
}