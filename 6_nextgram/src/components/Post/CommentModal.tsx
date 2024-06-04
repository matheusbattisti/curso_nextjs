"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { Post as PostType } from "types/Post";
import { addComment } from "@/actions";
import FlashMessage from "../FlashMessage";
import { GrClose } from "react-icons/gr";
import Button from "../Button";
import Image from "next/image";

interface CommentModalProps {
  post: PostType;
  currentUserId?: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({
  post,
  currentUserId,
  isOpen,
  onRequestClose,
}) => {
  const [content, setContent] = useState("");
  const [flashMessage, setFlashMessage] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const handleAddComment = async () => {
    if (!currentUserId) {
      window.location.href = "/signin";
      return;
    }

    if (!content.trim()) {
      setFlashMessage({
        message: "O comentário não pode estar vazio.",
        type: "error",
      });
      return;
    }

    await addComment(post.id, currentUserId, content);
    setFlashMessage({
      message: "Comentário adicionado com sucesso.",
      type: "success",
    });
    setContent("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Comments"
      ariaHideApp={false}
      className={
        "w-[704px] mx-auto mt-28 bg-white rounded border border-zinc-300"
      }
    >
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-4">Comentários</h2>
          <button
            onClick={onRequestClose}
            className="bg-red-600 hover:bg-red-400 text-white p-2 rounded-full"
          >
            <GrClose />
          </button>
        </div>
        {flashMessage && (
          <FlashMessage
            message={flashMessage.message}
            type={flashMessage.type}
          />
        )}
        <div className="mb-4 flex flex-col gap-0.5">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="flex items-center">
                {post.user.image && (
                  <Image
                    src={post.user.image}
                    alt={`${post.user.name}'s profile`}
                    className="w-10 h-10 object-cover rounded-full mr-3"
                    width={40}
                    height={40}
                  />
                )}
                <p className="text-sm">
                  <strong>{comment.user.name}:</strong> {comment.content}
                </p>
              </div>
            ))
          ) : (
            <p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>
          )}
        </div>
        {currentUserId && (
          <div className="mb-4 flex flex-col gap-6">
            <textarea
              className="w-full h-32 p-2 border border-zinc-300 rounded text-sm font-medium placeholder:text-zinc-500 focus:ring-0 focus:outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Adicione um comentário"
            />

            <div className="flex justify-end">
              <Button
                type="button"
                text="Comentar"
                onClick={handleAddComment}
              />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CommentModal;
