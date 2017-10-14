// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Att_code = require("./att_code");

// Creates a "Attendance" model that matches up with DB
var Attendance = sequelize.define("attendance", {
  user_id: {
    type: Sequelize.INTEGER
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATEONLY
});

Attendance.associate = function(models) {
  // We're saying that a an Attendance should belong to an User
  // A an Attendance can't be created without an User due to the foreign key constraint
  Attendance.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};


// Makes the Attendance Model available for other files (will also create a table)
module.exports = Attendance;