const express = require("express");
const testController = require("../controllers/test");

const router = express.Router();

router.get("/", testController.getAllTest);

module.exports = router;
