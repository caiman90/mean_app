/**
 * Created by rejhan on 27.11.2017.
 */

var mongoose = require('mongoose')
mongoose.Promise = Promise

module.exports = function() {
    mongoose.connect('mongodb://test:test@ds121726.mlab.com:21726/mean_web_app', {useMongoClient: true}, (err) => {
        if(!err)
            console.log('Connected to Mongo')
        else
            console.log(err)
})
}
