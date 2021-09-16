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

exports.allPostComment = (id) => {
  const singlePost = PostModel.findOne({
    where: { id },
    include: [
      {
        model: CommentModel,
        as: "comments",
        attributes: ["id", "body", "post_id", "commentBy"],
      },
    ],
  });
  return singlePost;
};
