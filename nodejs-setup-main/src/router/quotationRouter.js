const express = require("express");
const quotationController = require("../controllers/quotationControllers");

const router = express.Router();

router.get("/", quotationController.allQuotation);

router.get("/:id", quotationController.getIdQuotation);

router.get("/customer/:id", quotationController.getIdCustomer);

router.post('/', quotationController.postQuotation);

router.put("/" , quotationController.putQuotation);

router.delete("/", quotationController.deleteQuotation);

module.exports = router;