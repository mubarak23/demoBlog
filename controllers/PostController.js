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

exports.uploadImage = async (postImage) => {
  return sequelize.transaction(async (t) => {
    //process image image upload here
  });
};
