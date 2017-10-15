// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
    //Get all students' info
    app.get("/api/users",(request,response)=>{
        db.user.findAll({}).then((results)=>{
            response.json(results);
        });
    });
    
    app.get("/api/user/:user", (request, response) => {
        db.user.findAll({include: {
            model: db.groupe,
            where: {
                short_slug: request.params.user
            }
        }
        }).then(function(results){
            response.json(results);
        });
    });

    app.get('/api/attendances/:user?', (request, response) => {
        db.user.findAll({
            include: {
                model: db.att_code,
                attributes: ['id']
            },
            attributes: ['id', 'firstname', 'lastname']
        }).then((results) => {
            response.json(results);
        });
    });
    
};



