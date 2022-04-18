let express = require("express");

let router = express.Router();

router.get("/users", (req, res) => {
  res.send("users");
});

router.post("/create_user", (req, res) => {
  res.send("List of users");
});

router.put("/update_user", (req, res) => {
  res.send("updated list of users");
});

router.delete("/delete_user", (req, res) => {
  res.send("deleted list of users");
});

module.exports = router;
