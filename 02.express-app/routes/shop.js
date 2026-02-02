const express = require("express");

const router = express.Router();

router.get("/", (_req, res, _next) => {
  res.send("<p>hello from Express</p>");
});

module.exports = router;
