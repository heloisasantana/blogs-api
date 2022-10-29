const { categoryService } = require('../services');

const registerNewCategory = async (req, res) => {
  const response = await categoryService.registerNewCategoryService(req.body);
  if (response.type) return res.status(400).json({ message: response.message });
  return res.status(201).json(response.data);
};

const getAllCategories = async (_req, res) => {
  const response = await categoryService.getAllCategoriesService();
  return res.status(200).json(response);
};

module.exports = { registerNewCategory, getAllCategories };