const User=require('../../models/auth/user');
// const bcrypt=require("../../../node_modules/bcrypt/bcrypt");
const bcrypt=require('bcrypt');
const{check,validationResult}=require('express-validator');
// const MailController=require('../MailController');
// ------------------Validate Inputs -----------------------


// ------------------REGISTER USER -----------------------
exports.user_register=async(req,res)=>{
  var myData=new User({
    name: req.body.name,
    username:req.body.username,
    phone_number: req.body.phone_number,
    password:req.body.password,
    });
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(myData['password'],salt);
    myData['password']=hashedPassword
    const error=await validationResult(req);
    if(!error.isEmpty()){
      res.status(400).json({
        success: false,
        errors: error.array()
      });     
      
    }else {
        User.findOne({
            username: myData.username,
          })
          .then(function (data) {
            if(data){
                res.status(201).json({
                    success:true,
                    message:"User Name Already Used!",
                  });
            }else{
                 myData.save()
                .then(function(result){
                    res.status(201).json({
                        success:true,
                        message:"User Registered Sucessfully!",
                        data:result
                      });
                })
                .catch(function(result){
                    res.status(500).json({
                        success:false,
                        message:result
                      });
                });    
            }
          });
       
    }
};


// ------------------USER DISPLAY-----------------------
exports.user_display=function(req,res){

};


// ------------------USER DISPLAY-----------------------
exports.getMe=function(req,res){
    User.findOne({
        code: req.params.code,
      })
      .then(function (data) {
            if (!data) {
              return  res.status(404).json({
                success:false,
                message:"No user found"
              });
            } else if (data) {
              User.updateOne({ code: req.params.code },{ status: "active" })
                .then(function () {
                  res.status(201).json({ 
                    success: true,
                    message: "Your Account have been successfully Activated"
                  });
                })
                .catch(function (err) {
                  res.status(500).json({ 
                    success: false, 
                    message: err
                  });
                });
            }
      })
      .catch(function (e) {
        res.status(500).json({ success: false, message: e });
      });    
};

// ------------------USER UPDATE-----------------------
exports.user_update=function(req,res){

};

// ------------------DELETE USER-----------------------
exports.user_delete=function(req,res){
   
};


// ------------------VERIFY USER-----------------------
exports.verify=function(req,res){
  User.findOne({
    code: req.params.code,
  })
  .then(function (data) {
        if (!data) {
          return  res.status(404).json({
            success:false,
            message:"No user found"
          });
        } else if (data) {
          User.updateOne({ code: req.params.code },{ status: "active" })
            .then(function () {
              res.status(201).json({ 
                success: true,
                message: "Your Account have been successfully Activated"
              });
            })
            .catch(function (err) {
              res.status(500).json({ 
                success: false, 
                message: err
              });
            });
        }
  })
  .catch(function (e) {
    res.status(500).json({ success: false, message: e });
  });

};