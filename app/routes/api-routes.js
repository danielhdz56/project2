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
const Att_code = require('../models/att_code.js');

// Routes
// =============================================================
module.exports = function (app) {
    //Get all students' info
    +app.get("/api/:user?", (request, response) => {
        switch (request.params.user) {
            case "user":
                User.findAll({}).then((results) => {
                    response.json(results);
                });
                break;
            case "student":
                User.findAll({
                    where: {
                        short_slug: request.params.user
                    },
                    include: Group
                }).then((results) => {
                    response.json(results);
                });
                break;
                // case "students":
                // case "teacher":
                // case "teachers":
                // User.findAll({
                //     where: {
                //     description: request.params.user 
                // },
                //     include:[{
                //         model: Group
                //     }]
                // }).then((results)=>{
                //     response.json(results);
                // });
                // break;
            default:
                throw "Error 404. Data not found. Please specify your search query.";
        }
    });
}; //end of module.exports = function(app)