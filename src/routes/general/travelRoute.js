
const express=require('express');
const router =express.Router();
var TravelRouteController=require('../../controller/general/TravelRouteController');
const validates=require('../../helper/validator');

// ------------------ROUTE TO REGISTER  USER -----------------------

router.post("/route/add", validates.validate('travel_route'),TravelRouteController.add_travel_route);

// ------------------ROUTE TO DISPLAY TRAVEL ROUTES -----------------------
router.get("/route/display", TravelRouteController.get_travel_route);

router.post("/route/get", TravelRouteController.get_search_data);
// // ------------------ROUTE TO DELETE TRAVEL ROUTE -----------------------
// router.get("/route/delete/:id", UserController.user_delete);

// // ------------------ROUTE TO UPDATE TRAVEL ROOUTE -----------------------
// router.put("/route/update/:id", UserController.user_update);


module.exports = router;
