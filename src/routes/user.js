const express=require('express');
const router =express.Router();
var UserController=require('../controller/UserController.js');

router.post("/user/register", UserController)