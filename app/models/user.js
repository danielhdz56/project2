module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("user", {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    sex: {
      type: DataTypes.STRING
    },
    assignment:{
      type: DataTypes.STRING
    },
    // You should create a grade book for this rather than placing it here
    // Becuase user have grades and classes have grades
    // Calculate GPA on the fly
    dailygrade:{
      type: DataTypes.STRING
    },
    quizgrade:{
      type: DataTypes.STRING
    },
    testgrade:{
      type: DataTypes.STRING
    },
    address:{
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password:{
      type:DataTypes.STRING
    },
    photo:{
      type: DataTypes.STRING
    }
  });

  User.associate = function(models) {
    // Associating User with Attendance
    // When an User is deleted, also delete any associated Attendance
    User.belongsToMany(models.groupe, {through: "group_user"});
    User.belongsToMany(models.att_code, {through: "attendance"});
    User.belongsToMany(models.class, {through: "class_user"});
    User.hasMany(models.post);
    User.belongsToMany(models.department, {through: "department_user"});
  };

  return User;
};