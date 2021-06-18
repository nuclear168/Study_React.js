const express = require("express");
const rawMaterial = require("./control/api_jewelry/raw-material");
const cost = require("./control/api_jewelry/cost");
const app = express();
const logger = (req, res, next) => {
    console.log('เข้าแล้ว!!!');
    next();
};



//Init Middleware
// app.use(logger);

app.use(rawMaterial);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));