/* 
// This works, but it's like "a lightweight version"
// Not very configurable
const express = require("express");
const app = express();
app.listen(); */

const http = require("http");
const app = require("./app");
// express is here a fancy listening function for built in http server
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});