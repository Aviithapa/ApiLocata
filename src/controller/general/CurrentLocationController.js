const CurrentLocation=require('../../models/general/currentLocation');
const{check,validationResult}=require('express-validator');
// ------------------REGISTER USER -----------------------
exports.add_current_location=async(req,res)=>{
  var myData=new CurrentLocation({
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    vehicle_id : req.body.vehicle_id,
    ride_count : req.body.ride_count
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
                message:"Current Location Registered Sucessfully!",
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


exports.get_current_location=function(req,res){
  CurrentLocation.find()
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


exports.update_current_location=function(req,res){
    const id=req.params.id;
    const data=req.body;
    CurrentLocation.updateOne({_id:id},data)
        .then(function(result){
            CurrentLocation.findById(id)
            .then(function(data){
                res.status(200).json({
                  success:true,
                  message:"Current Location Updates",
                  data:data
                });
              }).catch(function(err) {
                res.status(200).json({
                  success:true,
                  message:err
                });
              });
        }).catch(function(result){
        res.status(500).json({
            success:false,
            message:result
        });
        });
};





