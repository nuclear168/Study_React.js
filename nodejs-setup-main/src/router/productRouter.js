const express = require("express");
const productController = require("../controllers/productControllers");

const router = express.Router();

router.get("/all", productController.allProduct);

router.get("/:id", productController.getIdProduct);

router.get("/", productController.getLastProductId);

router.post('/', productController.postProduct);

router.put("/" , productController.putProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;