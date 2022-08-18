// express is just middleware that we add on 
// top of our http server
// we can use it for routes and for using other middleware
const express = require("express");
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");
const path = require("path");

const app = express();
// added cors middleware
app.use(cors({
    origin: "http://localhost:3000",
}))


// CHAIN of middleware
// we know that our express server is going to take in 
// some json data
// so we can use the built in json middleware
// that will parse any incoming json from incoming request
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")))
app.use(planetsRouter);


module.exports = app;