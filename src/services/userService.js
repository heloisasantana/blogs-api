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

module.exports = { validateLoginService };