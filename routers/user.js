const express = require("express");
const user = require("../models").user;
const { Router } = express;

const router = new Router();

router.get("/users", async (request, response) => {
  const allUsers = user.findAll();
  response.send(allUsers);
});

module.exports = router;
