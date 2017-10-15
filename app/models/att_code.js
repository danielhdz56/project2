// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Attendance = require("./attendance");


// Creates a "Att_code" model that matches up with DB
var Att_code = sequelize.define("att_code", {
  slug: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
}, {
    classMethods: {
        associate: function(models) {
            Att_code.hasMany(models.Attendance);
        }
    }
});

// // Attendance status code has many attendances
// Att_code.association = function(models){
//   Att_code.hasMany(models.Attendance);
// }


// module.exports = Att_code;