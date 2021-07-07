const mongoose= require('mongoose');
var user= mongoose.model('user', {
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        unique: true,
        required: true 
    },
    phone_number:{
       type:String     
    },
    role:{
        type:String,
        enum:['User', 'Driver'],
        default:'User'
    },
    licence_image:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    user_image:{
        type:String,
    }

});

module.exports = user