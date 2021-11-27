const express = require('express');

const {getAllPosts, createPost, updatePost, deletePost, likePost} = require('../Controllers/postController')

const app = express();

//Routers
const postRouter = express.Router();

postRouter.route('/').get(getAllPosts).post(createPost);
postRouter.route('/:id').patch(updatePost).delete(deletePost);

postRouter.route('/:id/likePost').patch(likePost);

module.exports = postRouter;
