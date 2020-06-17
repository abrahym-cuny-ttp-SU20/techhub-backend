const { userService } = require("../services");
const { userRegistration } = userService;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    await userLogin(email, password);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
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
};
