const User=require('../../Models/Auth/user');
const{check,validationResult}=require('express-validator');
const bcrypt=require("bcryptjs");
const MailController=require('../MailController');
// ------------------Validate Inputs -----------------------
exports.validate=(method) => {
    switch (method) {
      case 'user_register': {
       return  [
        check('first_name',"First Name required").not().isEmpty(),
        check('last_name',"First Name required").not().isEmpty(),
        check('email',"Email Required").not().isEmpty(),
        check('password',"Password Required").not().isEmpty(),
        check('email',"Invalid Email").isEmail(),    
        check('password',"Length Must be greater than 8 digits").isLength({min:8})
         ]
      };
    };
  };


// ------------------REGISTER USER -----------------------
exports.user_register=async(req,res)=>{
  var myData=new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email:req.body.email,
    password:req.body.password,
    phone_number:req.body.phone_number,
    });
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(myData['password'],salt);
    myData['password']=hashedPassword
    myData['code']=salt
    const error=await validationResult(req);
    if(!error.isEmpty()){
      res.status(400).json({
        success: false,
        errors: error.array()
      });     
    }else{
        await myData.save() 
        .then(function(result){
          MailController.sendMail(result,salt);
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
};


// ------------------USER DISPLAY-----------------------
exports.user_display=function(req,res){

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