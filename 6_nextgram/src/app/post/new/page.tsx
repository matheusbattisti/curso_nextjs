import React from "react";
import CreatePostForm from "@/components/CreatePostForm";

const CreatePostPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>

      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
