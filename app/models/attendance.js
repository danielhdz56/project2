// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Attendance" model that matches up with DB
var Attendance = sequelize.define("attendance", {
  attcode_id: {

    type: Sequelize.INTEGER 
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  createdAt: Sequelize.DATEONLY,
  updatedAt: Sequelize.DATEONLY
});

//Attendance taken belongs to one attendance status code
// Attendance.belongsTo(Att_code);

// Syncs Attendance with DB
// Attendance.sync();

// Makes the Attendance Model available for other files (will also create a table)
module.exports = Attendance;