
const express=require('express');
const router =express.Router();
var LocationController=require('../../controller/general/LocationController');
const validates=require('../../helper/validator');

// ------------------ROUTE TO REGISTER  USER -----------------------

router.post("/location/add", LocationController.add_location);

// ------------------ROUTE TO DISPLAY TRAVEL ROUTES -----------------------
router.get("/location/display", LocationController.get_location);


// // ------------------ROUTE TO DELETE TRAVEL ROUTE -----------------------
// router.get("/route/delete/:id", UserController.user_delete);

// // ------------------ROUTE TO UPDATE TRAVEL ROOUTE -----------------------
// router.put("/route/update/:id", UserController.user_update);


module.exports = router;