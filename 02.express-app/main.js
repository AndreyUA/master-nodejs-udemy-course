const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("we are in the middleware!");

  next();
});

app.use((req, res, next) => {
  console.log("we are in the 2nd middleware!");

  res.send("<p>hello from Express</p>");
});

const server = http.createServer(app);

server.listen(3000);
