const express = require("express");
const customerController = require("../controllers/customerControllers");

const router = express.Router();

router.get("/all", customerController.allCustomer);

router.get("/:id", customerController.getIdCustomer);

router.get("/", customerController.getNameCompany);

router.post('/', customerController.postCustomer);

router.put("/" , customerController.putCustomer);

router.delete("/:id", customerController.deleteCustomer);

module.exports = router;
