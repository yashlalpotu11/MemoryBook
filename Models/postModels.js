const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    createdBy : String,
    title : String,
    message : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
})

const postModel = mongoose.model('postModel', postSchema);
module.exports = postModel;