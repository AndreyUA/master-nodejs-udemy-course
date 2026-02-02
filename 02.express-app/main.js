const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.post("/add-product", (_req, res, _next) => {
  res.send(
    "<form action='/product' method='post'><input type='text' name='title'><button type='submit'>Add product</button></form>",
  );
});

app.use("/product", (req, res, _next) => {
  console.log("request body: ", req.body);

  res.redirect("/");
});

app.use("/", (_req, res, _next) => {
  res.send("<p>hello from Express</p>");
});

app.listen(3_000);
