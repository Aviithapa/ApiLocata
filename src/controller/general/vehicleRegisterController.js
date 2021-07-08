const vehicleRegister=require('../../models/general/vehicleRegister');
const{check,validationResult}=require('express-validator');
const validater=require('../../helper/validator')
// ------------------REGISTER USER -----------------------
exports.add_new_vechicle=async(req,res)=>{
  var myData=new vehicleRegister({
    vechile_no: req.body.vechile_no,
    user_id: req.body.user_id,
    route_Name: req.body.route_Name,
    Location: req.body.Location,
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
                message:"Vehicle Registered Sucessfully!",
                data:result
              });
              validater.roleAssign(result.user_id)
               .then(function(result){
                res.status(201).json({
                    success:true,
                    message:"Role Assigned!",
                    data:result
                  });
                }).catch(function(result){
                    res.status(500).json({
                        success:false,
                        message:result
                      });
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


