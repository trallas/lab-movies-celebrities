
require('dotenv/config');
require('./db');
const express = require('express');
const hbs = require('hbs');
const app = express();
require('./config')(app);
const projectName = 'lab-movies-celebrities';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized('lab-movies-celebrities')}- Generated with Ironlauncher`;
const index = require('./routes/index')
app.use('/', index);

const moviesRoutes = require("./routes/movies.routes")
app.use("/movies", moviesRoutes)
require('./error-handling')(app);

module.exports = app;