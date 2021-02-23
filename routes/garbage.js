const express = require("express");

const { garbageList } = require("../controllers/thingController");

const router = express.Router();

router.get("/", garbageList);

module.exports = router;
