import { Card } from "@/components/ui/card";
import { format } from "date-fns";
// import { Button } from "./ui/button";
// import { Link } from "react-router-dom";
import { Post } from "@/models/Post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Posted on {format(new Date(post.createdAt), "MMM dd, yyyy")}
          </p>
          <div 
            className="prose dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        {/* <Button asChild variant="outline">
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </Button> */}
      </div>
    </Card>
  );
}