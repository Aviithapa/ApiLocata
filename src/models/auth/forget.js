const mongoose= require('mongoose');
var forget= mongoose.model('forget_password', {
    username:{
        type:String,
        required: true 
    },
    code:{
       type:String,
       required: true      
    },

});

module.exports = forget