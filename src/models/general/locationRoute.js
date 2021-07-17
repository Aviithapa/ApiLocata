const mongoose= require('mongoose');
var location= mongoose.model('location', {
    name:{
        type:String,
        require:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },

});
module.exports = location