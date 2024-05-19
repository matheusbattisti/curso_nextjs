import React from "react";
import CreatePostForm from "@/components/CreatePostForm";
import { auth } from "auth";
import { redirect } from "next/navigation";

const CreatePostPage: React.FC = async () => {
  const session = await auth();

  // Não tem session, vai para home
  if (!session || !session.user?.email) return redirect(`/`);

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>

      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
