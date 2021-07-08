const User=require('../models/auth/user');
const bcrypt=require('bcrypt');
const express = require('express')
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
      };
      case 'vehicle_register':{
        return[
          check('vechile_no',"vechile number is requred required").not().isEmpty(),
          check('user_id',"User id should not be empty").not().isEmpty(),
          check('route_Name',"Route should not be empty").not().isEmpty(),
          check('Location',"Location cannot be  empty").not().isEmpty(),
        ]
      }
    };
  };


  exports.password=async(password,username)=>{
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
      User.updateOne({username:username},{password:hashedPassword})
              .then(function(result){
                 return result
              }).catch(function(result){
                return result
             });    
  }

  exports.roleAssign=function(id) {
    User.updateOne({_id:id},{role:"Driver"})
       .then(function(result){
          return result 
       }).catch(function(result){
         return result
       })
  }