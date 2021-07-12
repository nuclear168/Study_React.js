require("dotenv").config();
const express = require("express");
const materialRouter = require("./router/materialRouter");
const staffRouter = require("./router/staffRouter");
const partner_materialRouter = require("./router/partner_materialRouter");
const partnerRouter = require("./router/partnerRouter");
const productRouter = require("./router/productRouter");
const certificateRouter = require("./router/certificateRouter");
const img_prodRouter = require("./router/img_prodRouter");
const img_cerRouter = require("./router/img_cerRouter");
const quotationRouter = require("./router/quotationRouter");
const orderRouter = require("./router/orderRouter");
const customerRouter = require("./router/customerRouter");
const logRouter = require("./router/logRouter");
const errorController = require("./controllers/error");
const cors = require("cors");
const app = express();

// const jwt = require("jsonwebtoken");
// var moment = require("moment");
// const bcrypt = require("bcrypt");

// enable CORS
app.use(cors());
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "CONTENT_TYPE, Authorization");
  next();
});

app.use("/", materialRouter);
app.use("/staff", staffRouter);
app.use("/partner-material", partner_materialRouter);
app.use("/partner", partnerRouter);
app.use("/product", productRouter);
app.use("/certificate", certificateRouter);
app.use("/img_prod", img_prodRouter);
app.use("/img_cer", img_cerRouter);
app.use("/quotation", quotationRouter);
app.use("/order", orderRouter);
app.use("/customer", customerRouter);
app.use("/log", logRouter);
// app.use(errorController.get404);
// app.use(errorController.get500);


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Backend is running on: " + port);
});
