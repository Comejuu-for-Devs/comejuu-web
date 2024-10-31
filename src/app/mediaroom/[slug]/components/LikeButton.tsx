"use client";
import React, { useState } from "react";

const LikeButton = ({ postId }: { postId: number }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    // Simulate updating likes
    setLikes(likes + 1);
  };

  return (
    <button
      onClick={handleLike}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Like {likes}
    </button>
  );
};

export default LikeButton;