"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      body: DataTypes.TEXT,
      post_id: DataTypes.STRING,
      commentBy: DataTypes.STRING,
    },
    {}
  );

  Comment.belongsTo(Post, {
    foreignKey: "post_id",
    as: "post_comments",
  });

  return Comment;
};
