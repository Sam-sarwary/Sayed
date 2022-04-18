let express = require("express");

let router = express.Router();

router.get("/contact", (req, res) => {
  res.send("this is our contact page");
});

module.exports = router;
