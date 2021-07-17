const mongoose= require('mongoose');
var vehicleRegister= mongoose.model('vehicleRegister', {
    vechile_no:{
        type:String,
        require:true
    },
    user_id:{
       type:String ,
       required: true  
    },
    route_Name:{
        type:String,
        required: true,  
    },
});

module.exports = vehicleRegister