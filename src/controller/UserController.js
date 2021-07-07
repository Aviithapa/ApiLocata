const user=require('../models/user');
const bcrypt=require("bcryptjs");
const{check, validation}=require('express-validator');