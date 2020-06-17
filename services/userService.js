const bcrypt = require("bcrypt");
const { User } = require("../database/models")


const userRegistration = async (user) => {
  try {
    console.log(user);
    const { password } = user;
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = { ...user, passwordHash: passwordHash };
    return await User.create(newUser);
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = { userRegistration };
