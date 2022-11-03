const { postService } = require('../services');

const registerNewPost = async (req, res) => {
  const response = await postService.registerNewPostService(req.body, req.validation);
  if (response.type) return res.status(400).json({ message: response.message });
  return res.status(201).json(response.data);
};

module.exports = { registerNewPost };