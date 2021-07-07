const mongoose= require('mongoose');
var user= mongoose.model('User', {
    name:{
        type:String,
        require:true
    },
    phone_number:{
        type:String,
        required:true,
        unique:true
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

    }

});
module.exports = user