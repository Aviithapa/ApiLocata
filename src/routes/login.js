const express = require("express");
const router = express.Router();
const LoginController = require("../controller/auth/LoginController");
const validates=require('../helper/validator');



router.post("/login",  LoginController.login);

module.exports = router;