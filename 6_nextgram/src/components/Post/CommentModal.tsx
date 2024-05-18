"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { Comment as CommentType } from "types/Comment";
import { Post as PostType } from "types/Post";
import { addComment } from "@/actions";
import { FiMessageSquare } from "react-icons/fi";
import { revalidatePath } from "next/cache";
import FlashMessage from "../FlashMessage";

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
      window.location.href = "/login";
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
    >
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Comentários</h2>
        {flashMessage && (
          <FlashMessage
            message={flashMessage.message}
            type={flashMessage.type}
          />
        )}
        <div className="mb-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <p>
                  <strong>{comment.user.name}:</strong> {comment.content}
                </p>
              </div>
            ))
          ) : (
            <p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>
          )}
        </div>
        {currentUserId && (
          <div className="mb-4">
            <textarea
              className="w-full p-2 border rounded"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Adicione um comentário"
            />
            <button
              onClick={handleAddComment}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Comentar
            </button>
          </div>
        )}
        <button
          onClick={onRequestClose}
          className="mt-4 bg-gray-300 py-2 px-4 rounded"
        >
          Fechar
        </button>
      </div>
    </Modal>
  );
};

export default CommentModal;
