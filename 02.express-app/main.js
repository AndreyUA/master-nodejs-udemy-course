const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this is the first middleware. It always runs.");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("we are in the 2nd middleware!");

  res.send("<p>add product page</p>");
});

app.use("/", (req, res, next) => {
  console.log("we are in the 2nd middleware!");

  res.send("<p>hello from Express</p>");
});

app.listen(3_000);
