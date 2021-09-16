const PostService = require("../service/PostService");
const sequelize = require("../config/database/connection");
exports.addNewPost = async (req, res, next) => {
  sequelize.transaction(async (t) => {
    try {
      // Create a Post instance
      const { title, body, createdBy, imageUrl } = req.body;
      //return res.send(req.body);
      //const imageUrl = req.body.image;
      //process image upload via another function call
      const createPost = await PostService.createPost({
        title,
        body,
        createdBy,
        imageUrl,
        transaction: t,
      });

      return res.status(200).send({
        success: true,
        data: createPost,
        message: "New Post was created successfully",
      });
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });
};

//fetch below standard performance by id
exports.getAllPostPaginate = async (req, res) => {
  try {
    const AllPostwithPagination = await PostService.allPostwithPagination();
    if (AllPostwithPagination === null) {
      return res.status(400).send({
        success: false,
        message: "No Post, Start creating Post",
      });
    }
    return res.status(200).send({
      success: true,
      AllPostwithPagination,
    });
  } catch (e) {
    return res.status(400).send({
      success: false,
      err: e.message,
      message: "Could not retrieve Post with Pagination",
    });
  }
};

// allPosts
exports.getAllPosts = async (req, res) => {
  try {
    const AllPosts = await PostService.allPosts();
    if (AllPosts === null) {
      return res.status(400).send({
        success: false,
        message: "No Post, Start creating Post",
      });
    }
    return res.status(200).send({
      success: true,
      AllPosts,
    });
  } catch (e) {
    return res.status(400).send({
      success: false,
      err: e.message,
      message: "Could not retrieve Post with Pagination",
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const singlePost = await PostService.singlePost(id);
    return res.status(200).send({
      success: true,
      singlePost,
    });
  } catch (e) {
    return res.status(400).send({
      success: false,
      err: e.message,
      message: "Could not retrieve  Post",
    });
  }
};

// updatePost
exports.updatePost = async (req, res, next) =>
  sequelize.transaction(async (t) => {
    try {
      const data = req.body;
      const checkPost = await PostService.singlePost(data.id);

      if (!checkPost) {
        return res.status(404).send({
          success: false,
          message: "Post does not exist",
        });
      }
      // Update single Post
      const updateSinglePost = await PostService.updatePost(data, t);
      if (!updateSinglePost) {
        return res.status(400).send({
          success: false,
          message: "Failed to update Post",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Post updated successfully",
      });
    } catch (error) {
      t.rollback();
      return next(error);
    }
  });

//delete deletePost
exports.deletePost = async (req, res) => {
  sequelize.transaction(async (t) => {
    try {
      const { id } = req.params;
      const checkPost = await PostService.singlePost(id);

      if (!checkPost) {
        return res.status(404).send({
          success: false,
          message: "Post does not exist",
        });
      }
      // eslint-disable-next-line no-unused-vars
      const deleteSinglePost = await PostService.deletePost({
        id,
        transaction: t,
      });
      return res.status(200).send({
        success: true,
        message: "Post was deleted successfully",
      });
    } catch (error) {
      return res.status(400).send({ success: false, message: error.message });
    }
  });
};

exports.uploadImage = async (postImage) => {
  return sequelize.transaction(async (t) => {
    //process image image upload here
  });
};
