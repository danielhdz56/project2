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
  timestamps: false,
  classMethods: {
    associate: function(models) {
      User.hasMany(models.Attendance);
    }
  } 
});

// User.hasMany(Attendance);


//User can belong to many groups
// User.belongsToMany(Group, { through: UserGroup });
// User can have attendance taken multiple times
// User.hasMany(Att_code, { through: Attendance });
//User can have multiple 
// User.hasMany(models.Attendance);
//User can belong to multiple class
// User.belongsToMany(models.Class, { through: UserClass });
//User can belong to multiple departments
// User.belongsToMany(Department, { through: UserDepartment });



// Makes the User Model available for other files (will also create a table)
module.exports = User;