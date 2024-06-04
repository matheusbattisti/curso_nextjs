import React from "react";
import CreatePostForm from "@/components/CreatePostForm";
import { auth } from "auth";
import { redirect } from "next/navigation";

const CreatePostPage: React.FC = async () => {
  const session = await auth();

  // Não tem session, vai para home
  if (!session || !session.user?.email) return redirect(`/`);

  return (
    <div className="w-[35rem] mx-auto p-4 my-10">
      <h1 className="text-[2rem] leading-10 text-center font-semibold">
        Criar novo post
      </h1>
      <div className="border border-zinc-300 p-4 rounded mt-8">
        <CreatePostForm />
      </div>
    </div>
  );
};

export default CreatePostPage;
