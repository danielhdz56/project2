// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models/index');
const User = require('../models/user');
const Attendance = require('../models/attendance');


// Routes
// =============================================================
module.exports = function(app) {
    //Get all students' info
    app.get("/api/users",(request,response)=>{
        User.findAll({}).then((results)=>{
            response.json(results);
        });
    });
    
    //Get all attendances' info 
    app.get("/api/attendances", (request, response) => {
        Attendance.findAll({}).then((results) => {
            response.json(results);
        });
    });
    
}//end of module.exports = function(app)