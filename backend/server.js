const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const ConnectedDB = require("./db/DB");
const authRoute = require("./Routers/AuthRoutes");

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use("/360circle/", authRoute);

ConnectedDB().then(() =>
  app.listen(8080, () => console.log("server is running"))
);
