const User=require('../../models/auth/user');
const Forget=require('../../models/auth/forget');
const bcrypt=require('bcrypt');


// ------------------USER DISPLAY-----------------------
exports.checkuser=function(req,res){
    User.findOne({
        username: req.params.username,
      })
      .then(function (data) {
            if (!data) {
              return  res.status(404).json({
                success:false,
                message:"No user found"
              });
            } else{
                var code= Math.floor(Math.random(5) * (10000 - 1 + 1) + 10000);
                var mydata=new Forget({
                    username:data.username,
                    code:code
                });
                mydata.save()
                .then(function(result){
                    res.status(201).json({
                        success:true,
                        message:"Reset Code has been send",
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
      })
      .catch(function (e) {
        res.status(500).json({ success: false, message: e });
      });    
};



exports.verifycode=function(req,res){
    Forget.findOne({
        code: req.params.code,
      })
      .then(function (data) {
            if (!data) {
              return  res.status(404).json({
                success:false,
                message:"Invalid Code"
              });
            } else{
                 res.status(201).json({
                 success:true,
                 message:"Your Password has been reset. Please choose a select a new password",
                 data:data,
              });
            }
      })
      .catch(function (e) {
        res.status(500).json({ success: false, message: e });
      });    
};


exports.reset=function(req,res){
    User.findOne({
        username: req.params.username,
      }).then(function (data) {
            if (!data) {
              return  res.status(404).json({
                success:false,
                message:"No user name found"
              });
            } 
            else{  
                const passwords=req.body.password
                const salt=bcrypt.genSalt(10);
                const hashedPassword=bcrypt.hash(passwords,salt);
                User.updateOne({username:req.params.username},{password:hashedPassword})
                    .then(function(result){
                    res.status(200).json({
                        success:true,
                        message:"User update Sucessfully",
                        data:result
                        });
                }).catch(function(result){
                        res.status(500).json({
                            success:false,
                            message:result
                        });
                });    
            };
            }) .catch(function (e) {
        res.status(500).json({ success: false, message: e });
      });   
};

