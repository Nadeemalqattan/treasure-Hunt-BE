const express = require("express");
const {
  thingCreate,
  thingDelete,
  thingUpdate,
  fetchThing,
} = require("../controllers/thingController");
const router = express.Router();

router.param("thingId", async (req, res, next, thingId) => {
  const foundThing = await fetchThing(thingId, next);
  if (foundThing) {
    req.thing = foundThing;
    next();
  } else {
    next({
      status: 404,
      message: "Thing not found",
    });
  }
});

const upload = require("../middleware/multer");

router.post("/", upload.single("image"), thingCreate);
router.delete("/:thingId", thingDelete);
router.put("/:thingId", upload.single("image"), thingUpdate);

module.exports = router;
