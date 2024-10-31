"use client";
import React, { useState } from "react";

const CommentsSection = ({ postId }: { postId: number }) => {
  // Dummy data for comments
  const [comments, setComments] = useState([
    { id: 1, text: "This is a great post!" },
    { id: 2, text: "Thanks for sharing!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate adding a new comment
    const newCommentObj = { id: comments.length + 1, text: newComment };
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Leave a comment"
          rows={4}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg mt-3 hover:bg-green-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border-b border-gray-200 pb-4">
            <p className="text-gray-700">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
