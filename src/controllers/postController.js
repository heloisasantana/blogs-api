const { postService } = require('../services');

const registerNewPost = async (req, res) => {
  const response = await postService.registerNewPostService(req.body, req.validation);
  if (response.type) return res.status(400).json({ message: response.message });
  return res.status(201).json(response.data);
};

const getAllPosts = async (_req, res) => {
  const response = await postService.getAllPostsService();
  return res.status(200).json(response);
};

const getPostFromID = async (req, res) => {
  const response = await postService.getPostFromIDService(req.params.id);
  if (!response) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(response);
};

module.exports = { registerNewPost, getAllPosts, getPostFromID };