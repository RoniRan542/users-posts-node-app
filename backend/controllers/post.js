const { status } = require('express/lib/response');
const Post = require('../models/post');

exports.getPosts =  (req, res) => {
    const posts = Post.find().select("_id title body author")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then((result) => {
            res.json({
                post: result
            })
        });
};

exports.updatePost = (req, res) => {
    const {id} = req.params;
    Post.findOneAndUpdate({_id:id},{$set: {author:req.body.author}},{new:true})
    .then((result) => {
        if (result) {
            res.json({success: true, message: "record updated"});
        } else {
            res.json({success: true, message: "record not found"});
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

exports.deletePost = (req, res) => {
    const {id} = req.params;
    Post.findOneAndRemove({_id:id})
    .then((result) => {
        if (result) {
            res.json({success: true, message: "record deleted"});
        } else {
            res.json({success: true, message: "record not found"});
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
