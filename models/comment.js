"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/database/connection");
const Post = require("./post");

const Comment = sequelize.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  commentBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   as: "post_comments",
// });

module.exports = Comment;
