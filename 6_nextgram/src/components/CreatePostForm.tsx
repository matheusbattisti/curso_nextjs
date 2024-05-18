"use client";

import React from "react";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";
import FlashMessage from "./FlashMessage";
import ImagePreview from "./ImagePreview";

const CreatePostForm: React.FC = () => {
  const [formState, formAction] = useFormState(createPost, {
    message: "",
    type: "success",
  });

  return (
    <>
      {formState.message && (
        <FlashMessage message={formState.message} type={formState.type} />
      )}
      <form
        action={formAction}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <ImagePreview currentImage={null} />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Conteúdo
          </label>
          <textarea
            name="caption"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="self-end bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Criar Post
        </button>
      </form>
    </>
  );
};

export default CreatePostForm;
