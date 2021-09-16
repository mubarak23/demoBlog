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
    limit: 4,
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

exports.singlePost = (id) => {
  const singlePost = PostModel.findOne({
    where: { id },
  });
  return singlePost;
};

exports.updatePost = (data, transaction) => {
  const updatesinglePost = PostModel.update(
    data,
    {
      where: { id: data.id },
    },
    transaction
  );
  return updatesinglePost;
};

exports.deletePost = ({ id, transaction }) => {
  const deleteSInglePost = PostModel.destroy(
    {
      where: { id },
    },
    transaction
  );
  return deleteSInglePost;
};
