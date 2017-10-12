// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Group" model that matches up with DB
var Department = sequelize.define("department", {
  user_id: {
    type: Sequelize.STRING
  },
  dept_name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false 
});

//Department can belong to many users
Department.belongsToMany(User, { through: UserDepartment });
//Department can belong  to many classes
Department.belongsToMany(Class, { through: DepartmentClass });
// Syncs Department model with DB
Department.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Department;