"use client";

import Link from "next/link";
import { posts } from "@/data/posts";
import { FaRegNewspaper, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Transition from "@/components/Transition";

export default function Blog() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      (post.tags && post.tags.join(" ").toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section className="flex flex-col items-center min-h-[60vh]">
      <Transition className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl px-8 py-12 max-w-2xl w-full border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 tracking-tight text-center flex items-center gap-2 transition-all duration-700">
          <FaRegNewspaper className="text-blue-500" /> Blog
        </h1>
        {/* Search Bar */}
        <div className="flex items-center mb-8 bg-blue-50 rounded-lg px-4 py-2 border border-blue-100 shadow-sm">
          <FaSearch className="text-blue-400 mr-2" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
            aria-label="Search posts"
          />
        </div>
        <ul className="space-y-6">
          {filteredPosts.length === 0 ? (
            <li className="text-center text-gray-500">No posts found.</li>
          ) : (
            filteredPosts.map((post) => (
              <li key={post.slug} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300 flex items-start gap-4">
                <FaRegNewspaper className="text-blue-400 text-xl mt-1" />
                <div className="flex flex-col w-full">
                  <Link href={`/blog/${post.slug}`} className="text-blue-700 font-semibold text-lg hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-1">
                    {post.title}
                  </Link>
                  <span className="text-gray-500 text-sm mb-2">{post.date}</span>
                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-700 text-sm mb-2">{post.excerpt}</p>
                  )}
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </Transition>
    </section>
  );
}
