"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/database/connection");
const Comment = require("./comment");

const Post = sequelize.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  as: "comments",
});

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   as: "comments",
// });

module.exports = Post;
