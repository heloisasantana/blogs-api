const { categoryService } = require('../services');

const registerNewCategory = async (req, res) => {
  const response = await categoryService.registerNewCategoryService(req.body);
  if (response.type) return res.status(400).json({ message: response.message });
  return res.status(201).json(response.data);
};

module.exports = { registerNewCategory };