const express = require("express");
const router = express.Router();
const internData = require("../data/intern.json");

router.get("/intern", (req, res) => {
  res.json(internData);
});

module.exports = router;
