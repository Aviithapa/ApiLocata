const mongoose= require('mongoose');
var travelroute= mongoose.model('TravelRoute', {
    RouteName:{
        type:String,
        require:true
    },
    RouteWay : [
        {
             name: {type : String},
        }
     ],
    created_at:{
        type:Date,
        default:Date.now
    },

});
module.exports = travelroute