
const express=require('express');
const router =express.Router();
var vechicleRegisterController=require('../../controller/general/vehicleRegisterController');
const validates=require('../../helper/validator');

// ------------------ROUTE TO REGISTER  USER -----------------------

router.post("/register/vehicle",vechicleRegisterController.add_new_vechicle);

// ------------------ROUTE TO DISPLAY TRAVEL ROUTES -----------------------
// router.get("/route/display", UserController.user_display);


// // ------------------ROUTE TO DELETE TRAVEL ROUTE -----------------------
// router.get("/route/delete/:id", UserController.user_delete);

// // ------------------ROUTE TO UPDATE TRAVEL ROOUTE -----------------------
router.put("/location/update/:id", vechicleRegisterController.updateLocation);

module.exports = router;
