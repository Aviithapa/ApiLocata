const Location=require('../../models/general/locationRoute');
const{check,validationResult}=require('express-validator');
// ------------------REGISTER USER -----------------------
exports.add_location=async(req,res)=>{
  var myData=new Location({
    name: req.body.name
    });
    const error=await validationResult(req);
    if(!error.isEmpty()){
      res.status(400).json({
        success: false,
        errors: error.array()
      });     
    }else{
        await myData.save() 
        .then(function(result){
            res.status(201).json({
                success:true,
                message:"Location Added Sucessfully!",
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


exports.get_location=function(req,res){
  Location.find()
  .then(function(data){
      res.status(200).json({
        success:true,
        message:"All Routes",
        data:data
      });
    }).catch(function(err) {
      res.status(200).json({
        success:true,
        message:err
      });
    });
};

