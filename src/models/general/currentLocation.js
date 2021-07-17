const mongoose= require('mongoose');
var CurrentLocation= mongoose.model('CurrentLocation', {
    vehicle_id:{
       type:String ,
       required: true  
    },
   longitude: {
       type : String
    },
    latitude: {
        type : String
    },
    direction: {
        type : String
    },
    ride_count:{
        type: Number
    }
      
});

module.exports = CurrentLocation