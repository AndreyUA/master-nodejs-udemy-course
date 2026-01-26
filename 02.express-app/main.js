const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("we are in the middleware!");

  next();
});

app.use((req, res, next) => {
  console.log("we are in the 2nd middleware!");

  // TODO: this won't allow request to "move further"
  //   next();
});

const server = http.createServer(app);

server.listen(3000);
