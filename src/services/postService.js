const { Category, BlogPost, PostCategory, User } = require('../models');

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

const getAllPostsService = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
    { model: Category, as: 'categories' },
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  return allPosts;
};

const getPostFromIDService = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: Category, as: 'categories' },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  return post;
};

module.exports = { registerNewPostService, getAllPostsService, getPostFromIDService };