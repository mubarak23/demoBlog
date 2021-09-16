const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

// newCommentOnPost
router.route("/comment/add").post(CommentController.newCommentOnPost);

// getPostSingleComment
router.route("/comment/single").post(CommentController.getPostSingleComment);

// getAllPostComments
router.route("/comment/all/:id").get(CommentController.getAllPostComments);

// updateComment
router.route("/comment/update").patch(CommentController.commentUpdate);

// deleteCOmment
router
  .route("/comment/delete/:id/:post_id")
  .delete(CommentController.deleteComment);

module.exports = router;
