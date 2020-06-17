const { userService } = require("../services");
const { userRegistration } = userService;
const passport = require("passport");

const login = async (req, res, next) => {
  passport.authenticate("local", {
    failureFlash: true,
  })(req,res,next);
};

const loginSuccess = async (req, res, next) => {
  console.log(req.session);
  res.send("You are successfully logged in!");
};

const loginFailure = async (req, res, next) => {
  console.log(req.session);
  res.send("You entered the wrong password!");
};

const logout = async (req, res, next) => {};

const register = async (req, res, next) => {
  const user = req.body;
  try {
    await userRegistration(user);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
  logout,
  register,
  loginSuccess,
  loginFailure
};

// const login = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     await userLogin(email, password);
//     res.sendStatus(200);
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(401);
//   }
// };
