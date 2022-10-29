const { User } = require('../models');
const { token } = require('../utils/token');

const validateLoginService = async ({ email, password }) => {
  if (!email || !password) {
    return { type: 'MISSING_INPUTS', message: 'Some required fields are missing' };
  }
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { type: 'INVALID_LOGIN', message: 'Invalid fields' };
  }
  return { type: null, token: token(user) };
};

const registerNewUserService = async (data) => {
  const user = await User.findOne({ where: { email: data.email } });
  if (user) return { type: 'ALREADY_EXISTS', message: 'User already registered' };
  const newUser = await User.create(data);
  return { type: null, token: token(newUser) };
};

module.exports = {
  validateLoginService,
  registerNewUserService,
};