const mongoose= require('mongoose');
var route= mongoose.model('Route', {
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
module.exports = route