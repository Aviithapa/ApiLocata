const User = require("../models/auth/user");
const jwt = require("jsonwebtoken");


exports.varifyUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, "abhishek");
    User.findById({ _id: decodedData.id })
      .then(function (alldata) {
        req.user = alldata;
        next();
      })
      .catch(function (err) {
        return res
          .status(201)
          .json({ success: false, msg: "Unauthorized access!!" });
      });
  } catch (err) {
    return res
      .status(201)
      .json({ success: false, msg: "Unauthorized access!!" });
  }
};
