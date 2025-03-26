import axiosApi from "@/lib/api.js";
import { Post } from "../models/Post.js";

export const createPost = async (post: { title: string; content: string }): Promise<Post> => {
  const res = await axiosApi.post("/posts", post);
  return res.data;
}

export const getPosts = async (): Promise<Post[]> => {
  const res = await axiosApi.get("/posts");
  const posts = res.data.posts;
  return posts;
};
