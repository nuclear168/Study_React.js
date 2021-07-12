const express = require("express");
const partnerController = require("../controllers/partnerControllers");

const router = express.Router();

router.get("/all", partnerController.allPartner);

router.get("/:id", partnerController.getIdPartner);

router.get("/", partnerController.getLastPartnerId);

router.post('/', partnerController.postPartner);

router.put("/" , partnerController.putPartner);

router.delete("/:id", partnerController.deletePartner);

module.exports = router;
