const { userService } = require('../services');

const validateLogin = async (req, res) => {
  const response = await userService.validateLoginService(req.body);
  if (response.type) return res.status(400).json({ message: response.message });
  return res.status(200).json({ token: response.token });
};

module.exports = { validateLogin };