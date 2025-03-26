import express from 'express';
const router = express.Router();
import authRoutes from './auth.routes.js';
import postRoutes from './post.routes.js';

router.use("/auth", authRoutes);
router.use("/posts", postRoutes);

export default router;
