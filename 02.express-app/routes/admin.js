const express = require("express");

const router = express.Router();

router.get("/add-product", (_req, res, _next) => {
  res.send(
    "<form action='/product' method='post'><input type='text' name='title'><button type='submit'>Add product</button></form>",
  );
});

router.post("/product", (req, res, _next) => {
  console.log("request body: ", req.body);

  res.redirect("/");
});

module.exports = router;
