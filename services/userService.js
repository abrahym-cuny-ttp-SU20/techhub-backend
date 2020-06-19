const bcrypt = require("bcrypt");
const { User } = require("../database/models")

/**
 * Purpose: Creates a new user with based on request data.
 * @param user
 * @returns {Promise<void>}
 */
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

/**
 * Purpose: Since the login route returns useless information such as
 * createdAt we use this function to get what we need.
 * @param user
 * @returns {{firstName: *, lastName: *, phoneNumber: *, role: *, id: *, email: *}}
 */
const userProcessing = (user) => {
  const { id, firstName, lastName, phoneNumber, email, role} = user.dataValues;

   return  {
    id: id,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    role: role
  };
}

module.exports = { userRegistration, userProcessing };
