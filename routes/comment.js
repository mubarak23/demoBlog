const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController");

// newCommentOnPost
router.route("/comment/add").post(CommentController.newCommentOnPost);

module.exports = router;
