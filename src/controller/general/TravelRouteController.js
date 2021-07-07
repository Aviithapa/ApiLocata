const TravelRoute=require('../../Models/Auth/route');
const{check,validationResult}=require('express-validator');
// ------------------REGISTER USER -----------------------
exports.add_travel_route=async(req,res)=>{
  console.log("You are here")
  var myData=new TravelRoute({
    RouteName: req.body.RouteName,
    RouteWay: req.body.RouteWay,
    });
    console.log("Here");
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

