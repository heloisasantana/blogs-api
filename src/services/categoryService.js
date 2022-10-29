const { Category } = require('../models');
const { categoryNameSchema } = require('./validations/schema');

const registerNewCategoryService = async (data) => {
  const { error } = categoryNameSchema.validate(data.name);
  if (error) return { type: 'MISSING_NAME', message: '"name" is required' };
  const newCategory = await Category.create(data);
  return { type: null, data: newCategory };
};

const getAllCategoriesService = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = { registerNewCategoryService, getAllCategoriesService };
