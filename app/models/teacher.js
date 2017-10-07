// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Teacher" model that matches up with DB
var Teacher = sequelize.define("teacher", {
  t_fname: {
    type: Sequelize.STRING
  },
  t_lname: {
    type: Sequelize.STRING
  },
  t_sex: {
    type: Sequelize.STRING
  },
  t_subj: {
    type: Sequelize.STRING
  },
  t_dept: {
    type: Sequelize.STRING
  },
  t_cohort: {
    type: Sequelize.INTEGER
  },
  t_add: {
    type: Sequelize.STRING
  },
  t_email: {
    type: Sequelize.STRING
  },
  t_password: {
    type: Sequelize.STRING
  },
  t_photo: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Teacher.sync();

// Makes the Teacher Model available for other files (will also create a table)
module.exports = Teacher;