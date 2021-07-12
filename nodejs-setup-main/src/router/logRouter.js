const express = require("express");
const logController = require("../controllers/logControllers");

const router = express.Router();

router.get("/all", logController.allLog);

router.get("/:id", logController.getIdLogStaff);

router.post('/', logController.postLog);

router.put("/" , logController.putLog);

router.delete("/:id", logController.deleteLog);

module.exports = router;
