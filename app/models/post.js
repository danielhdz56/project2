module.exports = function(sequelize, DataTypes){
  // Creates a "Post" model that matches up with DB
  var Post = sequelize.define("post", {
    content: {
      type: DataTypes.STRING
    },
    attachment: {
      type: DataTypes.STRING
    }
  });

  //Post can belong to only one user
  Post.associate = function(models){
    Post.belongsTo(models.user);
  };

  return Post;
};
