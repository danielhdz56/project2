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

  app.get("/vue", function(req, res) {
    const data = {
      text: "The vue page works!"
    };

    res.renderVue("test", data);
  });
};