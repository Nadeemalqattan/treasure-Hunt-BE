const express = require("express");
const cors = require("cors");
const db = require("./db/models");

const garbageRoutes = require("./routes/garbage");
const treasureRoutes = require("./routes/treasures");
const thingRoutes = require("./routes/things");

const app = express();
app.use(cors());

app.use("/garbage", garbageRoutes);
app.use("/treasures", treasureRoutes);
app.use("/things", thingRoutes);

db.sequelize.sync();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
