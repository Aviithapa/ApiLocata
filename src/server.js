const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//route of the database
const db = require("./database/database");

const user = require("./routes/auth/user");
const auth = require("./routes/auth/auth");
//posts route

app.use(express.json());
app.use(cors());

//combining All the routes
app.use(user, auth);

app.listen(port);
