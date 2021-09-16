"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../config/database/connection");

const Post = sequelize.define(
  "posts",
  {
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
  },
  { paranoid: true }
);

module.exports = Post;
