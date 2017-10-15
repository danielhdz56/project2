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

    //Get all attendances' info 
    app.get("/api/attendances", (request, response) => {
        Attendance.findAll({}).then((results) => {
            response.json(results);
        });
    });
    
};

//end of module.exports = function(app)
//Get all students' info
// app.get("/api/:user?",(request,response)=>{
//     switch(request.params.user)
//     {
//         case "user":
//         User.findAll({}).then((results)=>{
//             response.json(results);
//         });
//         break;

//         case "student":
//         User.findAll({
//             where: {
//             short_slug: request.params.user 
//         },
//             include:[{
//                 model: UserGroup
//             }]
//         }).then((results)=>{
//             response.json(results);
//         });
//         break;
//         // case "students":
//         // case "teacher":
//         // case "teachers":
//         // User.findAll({
//         //     where: {
//         //     description: request.params.user 
//         // },
//         //     include:[{
//         //         model: Group
//         //     }]
//         // }).then((results)=>{
//         //     response.json(results);
//         // });
//         // break;
//         default:
//         throw "Error 404. Data not found. Please specify your search query.";
//     }
// //});//end of user api
// // //Get all teachers' info
// // app.get("/api/teachers",(request,response)=>{
// //     User.findAll({
// //         where:{

// //         }
// //     }).then((results)=>{
// //         response.json(results);
// //     });
// //     });
// // //Get info on one specific user
// // app.get("/api/:user",(request,response)=>{
    
// // });
// };//end of module.exports = function(app)

