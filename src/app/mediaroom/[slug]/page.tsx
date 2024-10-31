import React, { useState } from "react";
import LikeButton from "./components/LikeButton";
import CommentsSection from "./components/CommentsSection";

const BlogPost = () => {
  // Dummy data for the blog post
  const post = {
    id: 1,
    title: "Sample Blog Post",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm md:text-base text-gray-700 mb-6">{post.content}</p>
      <LikeButton postId={post.id} />
      <CommentsSection postId={post.id} />
    </div>
  );
};

export default BlogPost;
