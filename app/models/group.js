module.exports = function(sequelize, DataTypes){
  // Time stamps are extraordinarily useful for selecting information
  // and dealing with users who do things they should not.
  var Group = sequelize.define("groupe", {
    short_slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });
  
  //Group can belong to many users
  Group.associate = function (models) {
    Group.belongsToMany(models.user, {through: "group_user"});
  };

  return Group;
};
