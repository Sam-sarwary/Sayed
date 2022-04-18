let express = require("express");

let router = express.Router();

router.get("/about", (req, res) => {
  res.send("about page");
});

router.get("/about_detail", (req, res) => {
  res.send("Another page of about page");
});

module.exports = router;
