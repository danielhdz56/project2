// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

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
    type:Sequelize.STRING
  }
}, {
  timestamps: false 
});
// User can belong to many groups

User.associate = function(models){
// User.belongsToMany(models.Group, { through: UserGroup,
//   foreignKey: id,
//   targetKey: user_id});
//User can have attendance taken multiple times
// User.hasMany(Att_code,{ through: Attendance });
//User can have multiple posts
// User.hasMany(Post);
//User can belong to multiple class
// User.belongsToMany(Class, { through: UserClass });
//User can belong to multiple departments
// User.belongsToMany(Department, { through: UserDepartment });

//Assume User can only be either Teacher or Student
User.belongsTo(models.Group,{
  foreignKey:{
  allowNull: false
}
});
}//end of User model

// Makes the User Model available for other files (will also create a table)
module.exports = User;