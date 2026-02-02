const express = require("express");

const router = express.Router();

router.get("/add-product", (_req, res, _next) => {
  res.send(
    "<form action='/admin/add-product' method='post'><input type='text' name='title'><button type='submit'>Add product</button></form>",
  );
});

router.post("/add-product", (req, res, _next) => {
  console.log("request body: ", req.body);

  res.redirect("/");
});

module.exports = router;
