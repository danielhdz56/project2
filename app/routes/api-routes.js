// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models/index');
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
    app.get("/api/:getQ?", (request, response) => {
        switch (request.params.getQ) {
            case "user":
            case "users":
                User.findAll({}).then((results) => {
                    response.json(results);
                });
                break;
            case "student":
            case "students":
                User.findAll({
                    where: {
                        short_slug: request.params.getQ
                    },
                    include: [{
                        model: Group
                    }]
                }).then((results) => {
                    response.json(results);
                });
                break;
            case "attendance":
            case "attendances":
                Attendance.findAll({}).then((results) => {
                    response.json(results);
                });
                break;
            default:
                throw "Error. Data not found. Please specify your search query.";
        } //end of switch-case
    }); //end of get query api

    //Route to post new info into user, attendance tables
    app.post("/api/:postQ?", function (request, response) {
        switch (request.params.postQ) {
            case "user":
            case "users":
                User.create(req.body).then((results) => {
                    response.json(results);
                });
                break;
            case "attendance":
            case "attendances":
                Attendance.create(req.body).then((results) => {
                    response.json(results);
                });
                break;
            default:
                throw "Error. Table not found on server. Please check your post query.";
        } //end switch-case
    }); //end of post query

    //Route to update info into user, attendance tables
    app.update("/api/:updateQ?", function (request, response) {
        switch (request.params.updateQ) {
            case "user":
            case "users":
                User.update({
                    firstname: request.body.firstname,
                    lastname: request.body.lastname,
                    sex: request.body.sex,
                    assignment: request.body.assignment,
                    dailygrade: request.body.dailygrade,
                    quizgrade: request.body.quizgrade,
                    testgrade: request.body.testgrade,
                    address: request.body.address,
                    email: request.body.email,
                    password: request.body.password,
                    photo: request.body.photo
                }, {
                    where: {
                        id: request.body.id
                    }
                }).then((results) => {
                    response.json(results);
                });
                break;
            case "attendance":
            case "attendances":
                Att_code.update({
                    slug: request.body.slug,
                    description: request.body.description
                }, {
                    where: {
                        id: Attendance.attCodeId,
                        user_id: request.body.id
                    },
                    //Possible joining error?
                    include: [Attendance]
                }).then((results) => {
                    response.json(results);
                });
                break;
            default:
                throw "Error. Table not found on server. Please check your query.";
        } //end switch-case
    }); //end of update query

    //Route to remove info from tables
    app.delete("/api/delete/:delQ1?/:delQ2", (request, response) => {
        switch (request.params.delQ1) {
            case "user":
            case "users":
                User.destroy({
                    where: {
                        id: request.params.delQ2
                    }
                }).then((results) => {
                    response.json(results);
                });
                break;
            case "attendance":
            case "attendances":
                Attendance.destroy({
                    where: {
                        id: request.params.delQ2
                    }
                }).then((results) => {
                    response.json(results);
                });
                break;
            default:
                throw "Error. Data not found. Please check your delete query.";
        } //end of switch-case
    }); //end of delete query api


} //end of module.exports = function(app)