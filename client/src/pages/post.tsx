import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextEditor from "@/components/RichTextEditor";
import { toast } from "sonner";
import { createPost } from "@/services/blog.api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await createPost({ title, content });
      toast("Post created successfully!" );
      navigate("/");
    } catch (error) {
      toast("Error creating post", {
        description: "Please try again later",
        dismissible: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <RichTextEditor
          initialContent={content}
          onChange={(newContent) => setContent(newContent)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Publishing..." : "Publish Post"}
        </Button>
      </form>
    </div>
  );
}