// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const expressVue = require("express-vue");
const path = require("path");

// Sets up the Express App to be used with socket.io
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//set up vue middlware
const vueOptions = {
  rootPath: path.join(__dirname, "app/views"),
  layout: {
    start: "<div id=app>",
    end: "</div>"
  }
};

const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static directory
app.use(express.static('app/public'));

// Routes
// =============================================================
require('./app/routes/api-routes.js')(app);

// Here we introduce HTML routing to serve different HTML files
require('./app/routes/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
server.listen(PORT, function() {
  console.log(`Server started on http://localhost:${PORT}`);
});
