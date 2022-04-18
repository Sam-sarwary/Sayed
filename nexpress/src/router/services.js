let express = require("express");

let router = express.Router();

router.get("/services", (req, res) => {
  res.send("users");
});

router.post("/create_service", (req, res) => {
  res.send("List of service");
});

router.put("/update_user", (req, res) => {
  res.send("updated list of services");
});

router.delete("/delete_user", (req, res) => {
  res.send("after delete list of services");
});

module.exports = router;
