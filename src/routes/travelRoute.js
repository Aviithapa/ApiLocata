
const express=require('express');
const router =express.Router();
var UserController=require('../controller/auth/UserController.js');

// ------------------ROUTE TO REGISTER  USER -----------------------

router.post("/user/register", UserController)

// ------------------ROUTE TO DISPLAY USER -----------------------
router.get("/user/display", UserController.user_display);


// ------------------ROUTE TO DELETE THE  USER -----------------------
router.get("/user/delete/:id", UserController.user_delete);

// ------------------ROUTE TO UPDATE USER -----------------------
router.put("/user/update/:id", UserController.user_update);

// ------------------ROUTE TO VERIFY USER -----------------------
router.get("/verify/:code", UserController.verify);

module.exports = router;
