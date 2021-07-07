//Creating the database of the name SCAST

const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Locata',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

