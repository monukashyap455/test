const router = require("express").Router();
const userController =require("../controller/users");

router.post('/create', userController.userCreate);

module.exports = router;asdadasgdagf