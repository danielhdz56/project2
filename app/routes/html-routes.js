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

  // loads home.hbs
  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/home.hbs"), {
      pageTitle: 'Home Page'
    });
  });
  // loads login.hbs
  app.get("/login", function(req, res) {
    res.render(path.join(__dirname, "../views/login.hbs"), {
      pageTitle: 'Login Page'
    });
  });

  app.get("/vue", function(req, res) {
    const data = {
      text: "The vue page works!"
    };

    res.renderVue("test", data);
  });
};