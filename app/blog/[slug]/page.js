'use client';

import { posts } from "@/data/posts";

export default function PostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return (
    <div>
      <h1 className="text-2xl font-bold">Post not found.</h1>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div className="mt-4">{post.content}</div>
    </div>
  );
}
