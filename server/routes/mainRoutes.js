/**
 * Created by rejhan on 27.11.2017.
 */

var Post = require('../models/Post')

module.exports = (app) => {
    // get All posts
    app.get('/posts/:id',async (req, res) => {
        var author = req.params.id
        var posts = await Post.find({author})
        res.status(200).send(posts)
    })
    // Saving Post
    app.post('/post', (req,res) => {
        var postData = req.body
        console.log(postData)
        postData.author = '5a1c298a11f2fc0d887b029d'
        var post = new Post(postData)
        post.save((err,result)=>{
        if(err){
            console.error('Error saving post : ' + err)
            res.status(500).send({message:'Saving post error'})
        }
        res.sendStatus(200)
        })
    })
    // get Post by ID
    app.get('/post/:id',async (req, res) =>{
        try {
            var user = await User.findById(req.params.id,'-password -__v')
        res.status(200).send(user)
        }catch (error){
        console.log(error)
        res.sendStatus(500)
        }
    })
}

