const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.route("/posts/create").post(PostController.addNewPost);

module.exports = router;
