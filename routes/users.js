var express = require("express");
var router = express.Router();
const passport = require("passport");
const { User } = require("../database/models");
const { userService } = require("../services");

/**
 * User Services
 * Purpose: These will contain the business logic. This is to produce a separation of concerns.
 * Request -> Route -> Service -> Route -> Response
 */
const { userRegistration, userProcessing } = userService;

router.post("/login", passport.authenticate("local"), function (req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  const processedUser = userProcessing(req.user);
  res.status(200).json(processedUser);
});

router.post("/logout", (req, res, next) => {
  req.logout();
  req.session.destroy(function (err) {
    if (!err) {
      res
        .status(200)
        .clearCookie("connect.sid", { path: "/" })
        .json({ status: "Success" });
    } else {
      res.status(500).json({status: "AN ERROR OCCURRED!"})
    }
  });
});

router.post("/", async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    await userRegistration(req.body);
    res.status(200);
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
