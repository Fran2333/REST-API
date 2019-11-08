var express = require('express');
var router = express.Router();
const RegisterController = require
("./../Controllers/RegisterControllers");

router.get("/", RegisterController.getRegister);
router.get("/:id", RegisterController.getOneRegister);
router.post("/", RegisterController.insert);
router.put("/", RegisterController.updateRegister);
router.delete("/", RegisterController.deleteRegister);
module.exports = router;
