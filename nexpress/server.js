import cors from "cors";
import path from "path";
import fs, { appendFileSync } from "fs";
import { isAsyncFunction } from "util/types";
import { assert } from "console";
// import express from "express";
//
let express = require("express");

// let user = require("./router/users");
// let home = require("./router");
// let service = require("./router/services");
// let contact = require("./router/contact");
// let about = require("./router/about");
// app.use("/users", user);
// app.use("/home", home);
// app.use("/contact", contact);
// app.use("/services", service);
// app.use("/about", about);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/contact", (req, res) => {
  res.send("this is our contact page");
});

app.get("/update_users/:userId", (req, res) => {
  res.send(req.params.userId);
});

app.put("/users/:username", (req, res) => {
  const user = req.params.username;

  if (!user) return res.status(404).json({});

  res.json(user);
});

app.delete("/delete_user", (req, res) => {
  res.send("deleted list of users");
});

const server = app.listen(9000, () => {
  console.log("Server is running");
});
