const bcrypt = require("bcrypt");
const { User } = require("../database/models")


const userRegistration = async (user) => {
  const { firstName, lastName, email, password } = user;
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    role: "USER",
  };
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUserWithHash = { ...newUser, passwordHash: passwordHash };
    return await User.create(newUserWithHash);
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = { userRegistration };
