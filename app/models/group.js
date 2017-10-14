// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Group" model that matches up with DB

var Group = sequelize.define("groupe", {
  user_id: {
    type: Sequelize.STRING
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
// Group.belongsToMany(User, { through: UserGroup });

// Syncs Group model with DB
Group.sync();

// Makes the Group Model available for other files (will also create a table)
module.exports = Group;