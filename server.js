// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 8080;

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
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
