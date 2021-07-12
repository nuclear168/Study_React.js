const express = require("express");
const orderController = require("../controllers/orderControllers");

const router = express.Router();

router.get("/", orderController.allOrder);

router.get("/product/:id", orderController.getIdProduct);

router.get("/quotation/:id", orderController.getIdQuotation);

router.post('/', orderController.postOrder);

router.put("/" , orderController.putOrder);

router.delete("/", orderController.deleteOrder);

module.exports = router;