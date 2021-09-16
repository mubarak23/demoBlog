const CommentService = require("../service/CommentService");
const PostService = require("../service/PostService");
const sequelize = require("../config/database/connection");

// addCommentOnPost
exports.newCommentOnPost = async (req, res, next) => {
  sequelize.transaction(async (t) => {
    try {
      // Create a comment on post
      const { body, post_id, commentBy } = req.body;
      // check the post exist before making comment on it
      const checkPost = await PostService.singlePost(post_id);
      if (!checkPost) {
        return res.status(400).send({
          success: true,
          message: "Post does not exist",
        });
      }
      const addCommentPost = await CommentService.addCommentOnPost({
        body,
        post_id,
        commentBy,
        transaction: t,
      });

      return res.status(200).send({
        success: true,
        data: addCommentPost,
        message: "Comment Added to Post successfully",
      });
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });
};
