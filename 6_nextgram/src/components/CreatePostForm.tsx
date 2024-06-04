"use client";

import React from "react";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";
import FlashMessage from "./FlashMessage";
import ImagePreview from "./ImagePreview";
import Button from "./Button";
import Label from "./Label";

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
        <ImagePreview />

        <div>
          <Label text="Conteúdo do post" htmlFor="content" />
          <textarea
            id="content"
            name="caption"
            className="w-full h-32 p-2 border border-zinc-300 rounded text-sm font-medium placeholder:text-zinc-500 focus:ring-0 focus:outline-none"
            placeholder="Digite algo"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button type="submit" text="Criar Post" />
        </div>
      </form>
    </>
  );
};

export default CreatePostForm;
