// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

//Creates a "Teapost" model for student posts that matches up with DB
var Teapost = sequelize.define("teapost", {
    s_id: {
        type: Sequelize.INTEGER
    },
    s_msg: {
        type: Sequelize.STRING
    },
    s_att: {
        type: Sequelize.STRING
    }
}, {
    timestamps: true
});

//sync with db
Teapost.sync();

//Makes the Teapost model available for other files (also creates a table)
module.exports = Teapost;