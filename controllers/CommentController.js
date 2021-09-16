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

// singlePostComment
//fetch below standard performance by id
exports.getPostSingleComment = async (req, res) => {
  try {
    const { id, post_id } = req.body;

    const singlePostComment = await CommentService.singlePostComment(
      id,
      post_id
    );
    return res.status(200).send({
      success: true,
      singlePostComment,
    });
  } catch (e) {
    return res.status(400).send({
      success: false,
      err: e.message,
      message: "Could not retrieve comment on a Post",
    });
  }
};

// allPostComment
exports.getAllPostComments = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePost = await CommentService.allPostComment(id);
    return res.status(200).send({
      success: true,
      singlePost,
    });
  } catch (e) {
    return res.status(400).send({
      success: false,
      err: e.message,
      message: "Could not retrieve all Post Comment",
    });
  }
};

// updateComment
exports.commentUpdate = async (req, res, next) =>
  sequelize.transaction(async (t) => {
    try {
      const data = req.body;

      const checkComment = await CommentService.singlePostComment(
        data.id,
        data.post_id
      );

      if (!checkComment) {
        return res.status(404).send({
          success: false,
          message: "Comment does not exist",
        });
      }
      // Update single Comment
      const updateSinglePost = await CommentService.updateComment(data, t);
      if (!updateSinglePost) {
        return res.status(400).send({
          success: false,
          message: "Failed to update COmment",
        });
      }
      return res.status(200).send({
        success: true,
        message: "COmment updated successfully",
      });
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });

// deleteComment
exports.deleteComment = async (req, res) => {
  sequelize.transaction(async (t) => {
    try {
      const { id, post_id } = req.params;
      const checkComment = await CommentService.singlePostComment(id, post_id);

      if (!checkComment) {
        return res.status(404).send({
          success: false,
          message: "Comment on Post does not exist",
        });
      }
      // eslint-disable-next-line no-unused-vars
      const deleteComment = await CommentService.deleteComment({
        id,
        transaction: t,
      });
      return res.status(200).send({
        success: true,
        message: "Post Comment deleted successfully",
      });
    } catch (error) {
      return res.status(400).send({ success: false, message: error.message });
    }
  });
};
