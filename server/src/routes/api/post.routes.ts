import express from 'express';
import { createPost, getAllPosts } from '../../controllers/post.controller.ts';
import { authenticate } from '../../middleware/auth.ts';
const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', getAllPosts);

export default router;