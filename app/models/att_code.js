module.exports = function(sequelize, DataTypes){

  // Creates a "Att_code" model that matches up with DB
  var Att_Code = sequelize.define("att_code", {
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  //Attendance status code has many attendances
  Att_Code.association = function(models){
    Att_Code.BelongsToMany(models.users, {through: "attendance"});

  }

  return Att_Code;
};
