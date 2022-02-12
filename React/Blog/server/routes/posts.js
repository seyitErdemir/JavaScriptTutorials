import express from 'express'

import  getPosts  from '../controllers/posts.js'

const router = express.Router()

//http://localhost:5000/posts/
//get post delete update patch

router.get('/', getPosts)

export default router
