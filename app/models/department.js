// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Department" model that matches up with DB
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

Department.associate = function(models){
//Department can belong to many users
Department.belongsToMany(models.User, { through: UserDepartment });
//Department can belong  to many classes
Department.belongsToMany(models.Class, { through: DepartmentClass });
// Syncs Department model with DB
}
Department.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Department;