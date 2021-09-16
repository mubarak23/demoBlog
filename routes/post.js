const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.route("/posts/create").post(PostController.addNewPost);
// getAllPost
router.route("/posts/paginate").get(PostController.getAllPostPaginate);

// getAllPosts
router.route("/posts/all").get(PostController.getAllPosts);

// getPostById
router.route("/post/:id").get(PostController.getPostById);

// updatePost
router.route("/post/update").patch(PostController.updatePost);

// deletePost
router.route("/post/delete/:id").delete(PostController.deletePost);

module.exports = router;
