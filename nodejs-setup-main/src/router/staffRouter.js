const express = require("express");
const staffController = require("../controllers/staffControllers");

const router = express.Router();

router.get("/", staffController.allStaff);

router.get("/:id", staffController.getIdStaff);

router.post('/', staffController.postStaff);

router.put("/" , staffController.putStaff);

router.delete("/:id", staffController.deleteStaff);

module.exports = router;
