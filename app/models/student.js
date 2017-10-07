// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Student" model that matches up with DB
var Student = sequelize.define("student", {
  s_fname: {
    type: Sequelize.STRING
  },
  s_lname: {
    type: Sequelize.STRING
  },
  s_sex: {
    type: Sequelize.STRING
  },
  GPA: {
    type: Sequelize.DECIMAL(5, 2)
  },
  s_cohort: {
    type: Sequelize.INTEGER
  },
  s_add: {
    type: Sequelize.STRING
  },
  s_email: {
    type: Sequelize.STRING
  },
  s_password: {
    type: Sequelize.STRING
  },
  s_photo: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Student.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Student;