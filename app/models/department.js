module.exports = function(sequelize, DataTypes){
  var Department = sequelize.define("department", {
    short_slug: {
      type: DataTypes.STRING
    },
    dept_name: {
      type: DataTypes.STRING
    }
  });

  Department.associate = function(models){
    //Department can belong to many users
    Department.belongsToMany(models.user, {through: "department_user"});
    //Department can belong  to many classes
    Department.belongsToMany(models.class, {through: "class_department"});
  };

  return Department;
};
