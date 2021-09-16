const PostModel = require("../models/post");
const CommentModel = require("../models/comment");

exports.addCommentOnPost = ({ body, post_id, commentBy, transaction }) => {
  const newComment = CommentModel.create(
    {
      body,
      post_id,
      commentBy,
    },
    { transaction }
  );
  return newComment;
};

exports.singlePostComment = (id, post_id) => {
  const singleComment = CommentModel.findOne({
    where: { id, post_id },
  });
  return singleComment;
};
