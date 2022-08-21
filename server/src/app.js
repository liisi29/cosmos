// express is just middleware that we add on 
// top of our http server
// we can use it for routes and for using other middleware
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const fs = require("fs");

const app = express();
// added cors middleware
app.use(cors({
    origin: "http://localhost:3000",
}));
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), { flags: 'a' }
);
// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));  // combined is default


// CHAIN of middleware
// we know that our express server is going to take in 
// some json data
// so we can use the built in json middleware
// that will parse any incoming json from incoming request
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")))
app.use(planetsRouter);


module.exports = app;