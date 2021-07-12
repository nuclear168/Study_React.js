const express = require("express");
const Partner_MaterialController = require("../controllers/partner_materialControllers");

const router = express.Router();

router.get("/", Partner_MaterialController.allPartner_Material);

router.get("/material/:id", Partner_MaterialController.getIdMaterial);

router.get("/partner/:id", Partner_MaterialController.getIdPartner);

router.post('/', Partner_MaterialController.postPartner_Material);

router.put("/" , Partner_MaterialController.putPartner_Material);

router.delete("/", Partner_MaterialController.deletePartner_Material);

module.exports = router;
