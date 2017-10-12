// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const User = require('../models/user.js');
const Group = require('../models/group.js');
const Class = require('../models/class.js');
const Department = require('../models/department.js');
const Post = require('../models/post.js');
const Attendance = require('../models/attendance.js');

// Routes
// =============================================================
module.exports = function(app) {
//Get all students' info
app.get("/api/user",(request,response)=>{
User.findAll({}).then((results)=>{
    response.json(results);
});
});
//Get all teachers' info
app.get("/api/teachers",(request,response)=>{
    Teacher.findAll({}).then((results)=>{
        response.json(results);
    });
    });
//Get info on one specific user
app.get("/api/:user",(request,response)=>{
    
});
};//end of module.exports = function(app)