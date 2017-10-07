// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

//Creates a "Stupost" model for student posts that matches up with DB
var Stupost = sequelize.define("stupost", {
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
Stupost.sync();

//Makes the Stupost model available for other files (also creates a table)
module.exports = Stupost;