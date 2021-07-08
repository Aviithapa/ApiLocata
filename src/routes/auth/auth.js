const express = require("express");
const router = express.Router();
const LoginController = require("../../controller/auth/LoginController");
const ForgetPasswordController = require("../../controller/auth/ForgetPasswordController");

router.post("/login",  LoginController.login);


router.get("/forgetpassword/:username", ForgetPasswordController.checkuser);
router.post("/forgetpassword/:code", ForgetPasswordController.verifycode);
router.post("/reset/:username", ForgetPasswordController.reset);
module.exports = router;