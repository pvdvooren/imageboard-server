const express = require("express");
const image = require("../models").image;
const { Router } = express;

const router = new Router();

router.get("/images", (request, response) => response.send(img.url));

module.exports = router;
