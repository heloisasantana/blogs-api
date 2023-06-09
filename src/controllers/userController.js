const { userService } = require('../services');
const { userSchema } = require('../services/validations/schema');

const validateLogin = async (req, res) => {
  const response = await userService.validateLoginService(req.body);
  if (response.type) return res.status(400).json({ message: response.message });
  return res.status(200).json({ token: response.token });
};

const registerNewUser = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const response = await userService.registerNewUserService(req.body);
  if (response.type) return res.status(409).json({ message: response.message });
  return res.status(201).json({ token: response.token });
};

const getAllUsers = async (_req, res) => {
  const response = await userService.getAllUsersService();
  return res.status(200).json(response);
};

const getUserFromID = async (req, res) => {
  const response = await userService.getUserFromIDService(req.params.id);
  if (!response) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(response);
};

module.exports = { validateLogin, registerNewUser, getAllUsers, getUserFromID };