// *********************************************************************************
// html-routes.js - this file offers a set of routes for rendering users to the various views
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const vue = {
  head: {
    meta: [{
      script: 'https://unpkg.com/vue@2.4.2/dist/vue.js'
    }, {
      script: "https://unpkg.com/axios/dist/axios.min.js"
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }, {
      style: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css'
    }],
  }
};

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    const data = {}

    res.renderVue("login", data, vue)
  });

  app.get("/home", function(req, res) {
    const data = {
      content: "grades"
    };

    res.renderVue("home", data, vue);
  });

  app.get("/signup", function(req, res) {
    const data = {
      text: "The signup vue page works!"
    };

    res.renderVue("signup", data, vue);
  });

  app.get("/login", function(req, res) {
    const data = {
      text: "The login vue page works!"
    };

    res.renderVue("login", data, vue);
  });
};