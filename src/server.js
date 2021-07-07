const express = require('express')
const app = express();
const port = 8000;
const cors = require("cors");

//route of the database
const db = require("./database/database");
//user route
const router = require("./routes/travelRoute");
const user = require("./routes/user");
const login = require("./routes/login");
//posts route

app.use(express.json());
app.use(cors());

//combining All the routes
app.use(router,user,login);


app.listen(port);