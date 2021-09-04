const express = require("express");
const router = express.Router();
var UserController = require("../../controller/auth/UserController.js");
const validates = require("../../helper/validator");
const verify = require("../../middleware/auth");
// ------------------ROUTE TO REGISTER  USER -----------------------

router.post(
  "/user/register",
  validates.validate("user_register"),
  UserController.user_register
);

// // ------------------ROUTE TO DISPLAY USER -----------------------
router.get("/user/display", UserController.user_display);

router.post("/job/register", UserController.job_register);
// // ------------------ROUTE TO DELETE THE  USER -----------------------
router.delete(
  "/user/delete/:id",
  verify.varifyUser,
  UserController.user_delete
);

// // ------------------ROUTE TO UPDATE USER -----------------------
router.put("/user/update/:id", verify.varifyUser, UserController.user_update);

// // ------------------ROUTE TO VERIFY USER -----------------------
// router.get("/verify/:code", UserController.verify);

module.exports = router;
