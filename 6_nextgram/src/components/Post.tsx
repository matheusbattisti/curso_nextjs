"use client";

import React, { useState } from "react";
import { Post as PostType } from "types/Post";
import LikeButton from "./Post/LikeButton";
import { FiMessageSquare } from "react-icons/fi";
import CommentModal from "./Post/CommentModal";

interface PostProps {
  post: PostType;
  currentUserId?: string;
}

const Post: React.FC<PostProps> = ({ post, currentUserId }) => {
  let isLiked = false;

  if (post.likes) {
    isLiked = post.likes.some((like) => like.userId === currentUserId);
  }

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  return (
    <div className="post mb-6 p-4 border rounded shadow-sm">
      <img
        src={post.imageUrl}
        alt={post.caption || "Imagem sem legenda"}
        className="w-full h-auto mb-4 rounded"
      />
      {post.caption && <p className="mb-2 text-lg">{post.caption}</p>}
      <div className="flex items-center">
        {post.user.image && (
          <img
            src={post.user.image}
            alt={`${post.user.name}'s profile`}
            className="w-10 h-10 rounded-full mr-3"
          />
        )}
        <p className="text-md font-medium">{post.user.name}</p>
      </div>
      <div className="flex items-center">
        <LikeButton
          postId={post.id}
          initialLikesCount={post.likes?.length ? post.likes.length : 0}
          isLiked={isLiked}
          currentUserId={currentUserId}
        />
        <button
          onClick={() => setIsCommentModalOpen(true)}
          className="ml-4 flex items-center"
        >
          <FiMessageSquare className="w-6 h-6 text-gray-500" />
          <span className="ml-1">
            {post.comments ? post.comments.length : 0}
          </span>
        </button>
      </div>
      <CommentModal
        post={post}
        currentUserId={currentUserId}
        isOpen={isCommentModalOpen}
        onRequestClose={() => setIsCommentModalOpen(false)}
      />
    </div>
  );
};

export default Post;
