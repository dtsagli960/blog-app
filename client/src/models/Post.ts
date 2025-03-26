export interface Post {
    id: number;
    title: string;
    content: string;
    coverImage?: string;
    userId: number;
    createdAt: Date;
}