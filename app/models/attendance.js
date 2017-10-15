// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Attendance" model that matches up with DB
var Attendance = sequelize.define("attendance", {
    attCode: {
        type: Sequelize.INTEGER,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATEONLY
  }, {
    classMethods: {
        associate : function(models) {
            Attendance.belongsTo(models.User);
            // Attendance.belongsTo(models.AttCode);
        }
    }
});

//Attendance taken belongs to one attendance status code

// Makes the Attendance Model available for other files (will also create a table)
module.exports = Attendance;