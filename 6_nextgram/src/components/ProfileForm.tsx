"use client";

import React from "react";
import { useFormState } from "react-dom";
import { updateUserProfile } from "@/actions";
import FlashMessage from "./FlashMessage";
import ImagePreview from "./ImagePreview";
import { User } from "next-auth";
import Button from "./Button";
import Label from "./Label";

type ProfileFormProps = {
  user: User;
};

const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
  const [formState, formAction] = useFormState(updateUserProfile, {
    message: "",
    type: "success",
  });

  return (
    <div className="w-full p-4 border border-zinc-300 rounded">
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
          <Label text="Nome" htmlFor="name" />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            defaultValue={user.name || ""}
            className="p-2 border border-zinc-300 rounded w-full text-sm placeholder:text-zinc-500 focus:ring-0 focus:outline-none"
          />
        </div>

        <ImagePreview />

        <div className="flex justify-end">
          <Button type="submit" text="Salvar" />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
