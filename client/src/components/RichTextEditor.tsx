import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";

export default function RichTextEditor({
  onChange,
  initialContent = "",
}: {
  onChange: (content: string) => void;
  initialContent?: string;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="space-y-2">
      <Toolbar editor={editor} />
      <EditorContent 
        editor={editor} 
        className="border rounded-md p-4 min-h-[300px]"
      />
    </div>
  );
}