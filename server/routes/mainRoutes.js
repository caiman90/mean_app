/**
 * Created by rejhan on 27.11.2017.
 */

var Post = require('../models/Post')

module.exports = (app) => {
    // Saving Post
    app.post('/post',require('./authMiddleware'),(req,res) => {
        var postData = req.body
        postData.author = req.userId
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
    app.get('/post/:id',require('./authMiddleware'),async (req, res) => {
        try {
            var user = await User.findById(req.params.id,'-password -__v')
            res.status(200).send(user)
        }catch (error){
            console.log(error)
            res.sendStatus(500)
        }
    })
    // get Users posts
    app.get('/posts/:id',require('./authMiddleware'),async (req, res) => {
        var author = req.userId
        var posts = await Post.find({author})
        res.status(200).send(posts)
    })

    app.post('/post/delete',async (req, res) => {
        var postId = req.body.postId
        Post.remove({_id: postId}, function (err, user) {
            if (err) return res.send(err);
            res.json({ message: 'Deleted' });
     });
    })
}

