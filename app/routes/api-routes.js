// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models/index');
const User = require('../models/user.js');


// Routes
// =============================================================
module.exports = function(app) {
//Get all students' info
    app.get("/api/user",(request,response)=>{
        User.findAll({}).then((results)=>{
            response.json(results);
        });
    });
}//end of module.exports = function(app)