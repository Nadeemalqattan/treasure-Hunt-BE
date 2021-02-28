const express = require("express");
const passport = require("passport");
const {
  thingCreate,
  thingDelete,
  thingUpdate,
  garbageList,
  treasureList,
} = require("../controllers/thingController");

const router = express.Router();

router.post("/", thingCreate);
router.get("/garbage", garbageList);
router.get(
  "/treasures",
  passport.authenticate("jwt", { session: false }),
  treasureList
);
router.put("/:thingId", thingUpdate);
router.delete("/:thingId", thingDelete);

module.exports = router;
