const TravelRoute=require('../../models/general/travelroute');
const{check,validationResult}=require('express-validator');
// ------------------REGISTER USER -----------------------
exports.add_travel_route=async(req,res)=>{
  var myData=new TravelRoute({
    RouteName: req.body.RouteName,
    RouteWay: req.body.RouteWay,
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
                message:"Route Registered Sucessfully!",
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


exports.get_travel_route=function(req,res){
  TravelRoute.find()
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


