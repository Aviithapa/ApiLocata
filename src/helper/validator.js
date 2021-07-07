const User=require('../models/auth/user');
const bcrypt=require('bcrypt');
const{check,validationResult}=require('express-validator');

exports.validate=(method) => {
    switch (method) {
      case 'user_register': {
       return  [
        check('name',"Name required").not().isEmpty(),
        check('username',"User Name required").not().isEmpty(),
        check('phone_number',"Phone Number required").not().isEmpty(),
        check('phone_number',"Phone Number Should be given").trim().isInt().isLength({min:10}),
        check('password',"Password Required").not().isEmpty(),
        check('password',"Length Must be greater than 8 digits").isLength({min:8})
         ]
      };
      case 'travel_route':{
          return[
            check('RouteName',"Route Name required").not().isEmpty(),
            check('RouteWay',"Route Way shoud be d Name required").not().isEmpty(),
          ]
      }
    };
  };


