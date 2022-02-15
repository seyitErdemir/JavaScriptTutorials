import axios from 'axios'
const apiEndPoint = 'http://localhost:5000/posts'

export const fetchPosts = async () => await axios.get(apiEndPoint)
export const createPost = async post => await axios.post(apiEndPoint, post)
