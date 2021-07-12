const express = require("express");
const img_prodController = require("../controllers/img_prodControllers");

const router = express.Router();

router.get("/", img_prodController.allImg_prod);

router.get("/:id", img_prodController.getIdImg_prod);

router.post('/', img_prodController.postImg_prod);

router.put("/" , img_prodController.putImg_prod);

router.delete("/:id", img_prodController.deleteImg_prod);

module.exports = router;
