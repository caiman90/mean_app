/**
 * Created by rejhan on 26.11.2017.
 */
var mongoose = require('mongoose')

module.exports = mongoose.model('User',{
    email: String,
    password: String
})