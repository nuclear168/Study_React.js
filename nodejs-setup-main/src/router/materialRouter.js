const express = require("express");
const materialController = require("../controllers/materialControllers");

const router = express.Router();

router.get("/raw-material", materialController.allMaterial);

router.get("/lastRaw-Material", materialController.getLastMaterialId);

router.get("/raw-material/:id", materialController.getIdMaterial);

router.post('/raw-material', materialController.postMaterial);

router.put("/raw-material" , materialController.putMaterial);

router.delete("/raw-material/:id", materialController.deleteMaterial);

module.exports = router;
