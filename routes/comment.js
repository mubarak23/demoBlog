const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

// newCommentOnPost
router.route("/comment/add").post(CommentController.newCommentOnPost);

// getPostSingleComment
router.route("/comment/single").post(CommentController.getPostSingleComment);

module.exports = router;
