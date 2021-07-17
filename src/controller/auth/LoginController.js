const User=require('../../models/auth/user');
const bcrypt=require('bcrypt');
const{check,validationResult}=require('express-validator');
const jwt = require("jsonwebtoken");

exports.login = function (req, res) {
  const email=req.body.username;
  const password= req.body.password;
  console.log(email,password);
  //find the user on the basis of the email provided
  User.findOne({username:email})
  //after getting the email
  .then(function(data) {
      //if their is not data send message to the user not found the user
      if(data===null){
         return res.status(403).json({
             success:false,
             message:"Invalid Crediantial"
          });
      }
      //else bcrypt the password provided by the user and match it to the database encrypt password
      bcrypt.compare(password,data.password,function(err,result){
          if(result===false){
              return res.status(403).json({
                  success:false,
                  message:"Invalid Crediantial"
              });
          }
          //if it matches generate a token with user email attached to it and store it
          const accesstoken = jwt.sign({id:data._id},"abhishek");
          res.status(200).json({
             success:true,
             message:"Login Successful",
             accesstoken:accesstoken,

             data:data
         });
      });
      
  })
  .catch(function(err){
    res.status(403).json({
      sucess:false,
      message:err
    });
  });
  
};