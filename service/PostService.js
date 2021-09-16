const PostModel = require("../models/post");

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
