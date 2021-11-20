const Post = require('../models/postModels');

exports.getAllPosts = async (req, res) => {
    try{
        const post = await Post.find();
        res.status(200).send(post);
    }
    catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

exports.createPost = async (req, res) => {
    try{
        const post = await Post.create(req.body);
        res.status(200).send(post);
    }
    catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

exports.updatePost = async (req, res) => {
    try{
        const updateData = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
    }
    catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

exports.deletePost = async (req, res) => {
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).send("Post deleted successfully");
    }
    catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}

exports.likePost = async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        const updatePost = await Post.findByIdAndUpdate(req.params.id, {
            likeCount: post.likeCount + 1
        },
        {
            new: true
        });
        res.status(200).send(updatePost);
    }
    catch(err){
        res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
}