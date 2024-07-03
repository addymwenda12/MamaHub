import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { description, picturePath } = req.body;
    const userId = req.user.id;

    const newPost = new Post({
      userId,
      description,
      picturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { Id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(Id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};