
const express=require('express');
const router =express.Router();
var CurrentLocation=require('../../controller/general/CurrentLocationController');
const validates=require('../../helper/validator');

// ------------------ROUTE TO REGISTER  USER -----------------------

router.post("/currentlocation/add",CurrentLocation.add_current_location);

// ------------------ROUTE TO DISPLAY TRAVEL ROUTES -----------------------
router.get("/currentlocation/display", CurrentLocation.get_current_location);


// // ------------------ROUTE TO DELETE TRAVEL ROUTE -----------------------
router.put("/currentlocation/update/:id", CurrentLocation.update_current_location);
// router.get("/route/delete/:id", UserController.user_delete);

// // ------------------ROUTE TO UPDATE TRAVEL ROOUTE -----------------------
// router.put("/route/update/:id", UserController.user_update);


module.exports = router;