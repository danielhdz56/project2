// Dependencies
// =============================================================
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Att_code = require("./att_code");
var Attendance = require("./attendance");

// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  sex: {
    type: Sequelize.STRING
  },
  assignment:{
    type: Sequelize.STRING
  },
  dailygrade:{
    type: Sequelize.STRING
  },
  quizgrade:{
    type: Sequelize.STRING
  },
  testgrade:{
    type: Sequelize.STRING
  },
  address:{
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password:{
    type:Sequelize.STRING
  },
  photo:{
    type: Sequelize.STRING
  }
}, {
  timestamps: false 
});

User.associate = function(models) {
  // Associating User with Attendance
  // When an User is deleted, also delete any associated Attendance
  User.hasMany(models.Attendance, {
    onDelete: "cascade"
  });
};



//User can belong to many groups
// User.belongsToMany(Group, { through: UserGroup });
// User can have attendance taken multiple times
// User.hasMany(Att_code, { through: Attendance });
//User can have multiple posts
User.hasMany(models.Post);
//User can belong to multiple class
User.belongsToMany(models.Class, { through: UserClass });
//User can belong to multiple departments
// User.belongsToMany(Department, { through: UserDepartment });


// Makes the User Model available for other files (will also create a table)
module.exports = User;