const PostModel = require("../models/post");
const CommentModel = require("../models/comment");

exports.createPost = ({ title, body, imageUrl, createdBy, transaction }) => {
  const newPost = PostModel.create(
    {
      title,
      body,
      imageUrl,
      createdBy,
    },
    { transaction }
  );
  return newPost;
};

exports.allPostwithPagination = () => {
  const Posts = PostModel.findAll({
    limit: 1,
    offset: 1,
    attributes: ["id", "title", "body", "imageUrl", "createdBy"],
    include: [
      {
        model: CommentModel,
        as: "comments",
        attributes: ["id", "body", "post_id", "commentBy"],
      },
    ],
  });
  return Posts;
};

exports.allPosts = () => {
  const Posts = PostModel.findAll({
    attributes: ["id", "title", "body", "imageUrl", "createdBy"],
    include: [
      {
        model: CommentModel,
        as: "comments",
        attributes: ["id", "body", "post_id", "commentBy"],
      },
    ],
  });
  return Posts;
};
