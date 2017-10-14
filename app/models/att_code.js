// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Att_code" model that matches up with DB
var Att_code = sequelize.define("att_code", {
  slug: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
});

//Attendance status code has many attendances
Att_code.association = function(models){
Att_code.hasMany(Attendance);
}
// Syncs Att_code with DB
Att_code.sync();

// Makes the Att_code available for other files (will also create a table)
module.exports = Att_code;