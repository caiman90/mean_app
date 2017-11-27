/**
 * Created by rejhan on 26.11.2017.
 */
var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name:String,
    description:String
})
// we need regular function becasue of usage of scope of user (this)
userSchema.pre('save',function(next){
    var user = this
    if(!user.isModified('password'))
        return next()

    bcrypt.hash(user.password,null,null,(err,hash)=>{
         if(err) return next(err)

        user.password = hash
        next()
    })
})

module.exports = mongoose.model('User',userSchema)
