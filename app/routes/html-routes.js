// *********************************************************************************
// html-routes.js - this file offers a set of routes for rendering users to the various views
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  
  // index route loads view.html
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/home.hbs"), {
      pageTitle: 'Home Page',
      welcomeMessage: 'Handlebars are awesome'
    });
  });
};
