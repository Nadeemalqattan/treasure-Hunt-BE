const express = require("express");

const { treasureList } = require("../controllers/thingController");

const router = express.Router();

router.get("/", treasureList);

module.exports = router;
