const { jwtTokenVerification } = require('../utils/token');

const validateToken = async (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json({ message: 'Token not found' });
  const validation = await jwtTokenVerification(req.headers.authorization);  
  if (validation.error) return res.status(401).json({ message: 'Expired or invalid token' });
  req.validation = validation.data;
  return next();
};

module.exports = { validateToken };