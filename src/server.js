const express = require('express')
const app = express();
const port = 8000;
const cors = require("cors");

//route of the database
const db = require("./database/database");
//user route
const travelRoute = require("./routes/general/travelRoute");
const vehicleRegister = require("./routes/general/vehicleRegister");
const user = require("./routes/auth/user");
const auth = require("./routes/auth/auth");
//posts route

app.use(express.json());
app.use(cors());

//combining All the routes
app.use(travelRoute,user,auth,vehicleRegister);


app.listen(port);