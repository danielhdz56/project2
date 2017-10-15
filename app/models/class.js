module.exports = function(sequelize, DataTypes){

  var Class = sequelize.define("class", {
    class_name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    }
  });

  //Class can belong to only one department
  Class.associate = function(models){
    Class.belongsToMany(models.department, {through: "class_department"});
    Class.belongsToMany(models.user, {through: "class_user"});
  };

  return Class;
};