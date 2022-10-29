require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

const token = (data) => jwt.sign(
  { data }, 
  process.env.JWT_SECRET, 
  jwtConfig,
);

const jwtTokenVerification = (reqToken) => {
  try {
    const { data } = jwt.verify(reqToken, process.env.JWT_SECRET);
    return { data };
  } catch (error) {
    return { error };
  }
};

module.exports = { token, jwtTokenVerification };