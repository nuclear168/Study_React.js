const express = require("express");
const certificateController = require("../controllers/certificateControllers");

const router = express.Router();

router.get("/all", certificateController.allCertificate);

router.get("/:id", certificateController.getIdCertificate);

router.get("/", certificateController.getLastCertificateId);

router.post('/', certificateController.postCertificate);

router.put("/" , certificateController.putCertificate);

router.delete("/:id", certificateController.deleteCertificate);

module.exports = router;
