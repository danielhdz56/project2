// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Class" model that matches up with DB

var Class = sequelize.define("class", {
  class_name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.STRING
  },
  dept_id: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false 
});

//Class can belong to only one department
// Class.associate = function(models){
// Class.belongsToMany(models.Department, { through: DepartmentClass });
// }

// Makes the Model available for other files (will also create a table)
module.exports =Class;