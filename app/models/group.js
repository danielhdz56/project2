// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Group" model that matches up with DB

var Group = sequelize.define("groupe", {
  user_id: {
    type: Sequelize.INTEGER
  },
  short_slug: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

//Group can belong to many users
Group.associate = function(models){
// Group.belongsToMany(models.User, { through: UserGroup,
// foreignKey: user_id,
// targetKey: id });
Group.hasMany(models.User);
}


// Makes the Group Model available for other files (will also create a table)
module.exports = Group;