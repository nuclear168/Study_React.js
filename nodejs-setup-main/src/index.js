require("dotenv").config();
const express = require("express");
const testRoutes = require("./routes/test");
const errorController = require("./controllers/error");
const cors = require("cors");
const bodyParser = require("body-parser");

// const jwt = require("jsonwebtoken");
// var moment = require("moment");
// const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 4000;
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "CONTENT_TYPE, Authorization");
  next();
});

app.use("/test", testRoutes);
// app.use(errorController.get404);
// app.use(errorController.get500);

app.listen(port, () => {
  console.log("Backend is running on: " + port);
});
