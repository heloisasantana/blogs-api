const { Category, BlogPost, PostCategory } = require('../models');

const registerNewPostService = async ({ title, content, categoryIds }, { id }) => {
  if (!title || !content || !categoryIds) {
    return { type: 'MISSING_FIELDS', message: 'Some required fields are missing' };
  }
  const response = await Promise.all(
    categoryIds.map((categoryId) => Category.findOne({ where: { id: categoryId } })),
  );
  if (response.some((categoryId) => categoryId === null)) {
    return { type: 'INVALID_CATEGORY', message: 'one or more "categoryIds" not found' };
  }
  const newPost = await BlogPost.create({ title, content, userId: id });
  await Promise.all(
    categoryIds.map((categoryId) => PostCategory.create({ categoryId, postId: newPost.id })),
  );
  return { type: null, data: newPost };
};

module.exports = { registerNewPostService };