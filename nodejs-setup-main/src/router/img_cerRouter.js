const express = require("express");
const img_cerController = require("../controllers/img_cerControllers");

const router = express.Router();

router.get("/", img_cerController.allImg_cer);

router.get("/:id", img_cerController.getIdImg_cer);

router.post('/', img_cerController.postImg_cer);

router.put("/" , img_cerController.putImg_cer);

router.delete("/:id", img_cerController.deleteImg_cer);

module.exports = router;
