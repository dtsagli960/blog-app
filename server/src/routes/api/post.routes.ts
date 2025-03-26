import express from 'express';
import { createPost, getAllPosts } from '../../controllers/post.controller.js';
import { authenticate } from '../../middleware/auth.js';
const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', getAllPosts);

export default router;