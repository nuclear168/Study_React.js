const express = require("express");
const materialController = require("../controllers/materialControllers");

const router = express.Router();

router.get("/raw-material", materialController.allMaterial);

router.get("/lastRaw-MaterialId", materialController.getLastMaterialId);

router.post('/raw-material', materialController.postMaterial);

module.exports = router;
