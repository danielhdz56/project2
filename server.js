// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

// Sets up the Express App to be used with socket.io
// =============================================================
var app = express();
const PORT = process.env.PORT || 8080;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Sets up the Express app to use hbs for the view engine
app.set('view engine', 'hbs');
hbs.registerPartials('app/views/partials');

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
  console.log('App listening on PORT ' + PORT);
});
