// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Post" model that matches up with DB
var Post = sequelize.define("post", {
  user_id: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  attachment: {
    type: Sequelize.STRING
  }, 
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

//Post can belong to only one user
// Post.associate = function(models){
// Post.belongsTo(models.User);
// }

// Makes the Model available for other files (will also create a table)
module.exports = Post;