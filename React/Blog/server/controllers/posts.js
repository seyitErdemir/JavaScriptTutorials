import Post from '../models/posts.js'
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
}

export const createPost = async (req, res) => {
  const newPost = new Post(req.body)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
