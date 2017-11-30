/**
 * Created by rejhan on 30.11.2017.
 */
var jwt = require('jwt-simple')

module.exports = function checkAuthenticated(req,res,next){
    if(req.header('Authorization').split(' ')[1] === "null"){
        return res.status(401).send({message: 'Unauthorized. Missing Authorization Header'})
    }else{
        // becasue of "token" spearation on client side see authInterceptor
        var token = req.header('Authorization').split(' ')[1]
        var payload = jwt.decode(token, '123');
        if(!payload)
            return res.status(401).send({message: 'Unauthorized. Authorization Header Invalid'})
        req.userId = payload.sub
    }
    next()
}