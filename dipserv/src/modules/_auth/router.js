const controller = require('./controller');
const express = require("express");
const router = express.Router();

router.post("/registration", controller.registration);
router.post("/login", controller.login);

module.exports = router;