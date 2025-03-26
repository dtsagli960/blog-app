import { Request, Response } from 'express';
import Post from '../models/post.model.ts';


export const createPost = async (req: Request, res: Response) => {
    const { title, content, coverImage } = req.body;
    const userId = req.user?.id;
    
    if (userId === undefined) res.status(401).json({ error: 'Unauthorized' });

    const post = await Post.create({ title, content, coverImage, userId: Number(userId) });
    res.status(201).json({post: post});
};

export const getAllPosts = async (req: Request, res: Response) => {
    console.log(req.body);
    const posts = await Post.findAll();
    res.status(200).json({posts: posts});
};