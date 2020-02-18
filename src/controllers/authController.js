const express = require("express");
const routes = express.Router();

const USER = "admin";
const PASSWORD = "admin";
const HASH = "d407ff8d947f877167fdfe89dedcbc20";

routes.post("/", async (req, res) => {
  const { user, password } = req.body;

  if (user != USER) return res.status(400).send({ error: "User not found" });
  if (password != PASSWORD)
    return res.status(200).send({ status: "Password not found" });

  res.status(200).send({ HASH });
});
module.exports = routes;
