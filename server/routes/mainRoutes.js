/**
 * Created by rejhan on 27.11.2017.
 */


module.exports = (app) => {
var messages = [
    {message:'hello'},
    {message:'From Express Server '}
];

app.get('/messages',(req, res) => {
    res.send(messages)
})
};

