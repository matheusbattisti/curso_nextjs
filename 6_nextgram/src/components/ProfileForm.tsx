"use client";

import React from "react";
import { useFormState } from "react-dom";
import { updateUserProfile } from "@/actions";
import FlashMessage from "./FlashMessage";
import ImagePreview from "./ImagePreview";
import { User } from "next-auth";

type ProfileFormProps = {
  user: User;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
  const [formState, formAction] = useFormState(updateUserProfile, {
    message: "",
    type: "success",
  });

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-sm">
      {formState.message && (
        <FlashMessage message={formState.message} type={formState.type} />
      )}
      <form
        action={formAction}
        method="POST"
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="id" value={user.id} />
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user.name || ""}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Imagem
          </label>
          <ImagePreview currentImage={user.image || ""} />
        </div>
        <button
          type="submit"
          className="self-end bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
