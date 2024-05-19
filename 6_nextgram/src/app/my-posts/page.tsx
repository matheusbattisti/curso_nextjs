import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getUserPosts, deletePost } from "@/actions";
import { Post as PostType } from "types/Post";
import { auth } from "auth";
import { redirect } from "next/navigation";

const MyPosts: React.FC = async () => {
  const session = await auth();

  let userId = null;

  if (session) {
    userId = session.user.userId;
  } else {
    redirect("/");
  }

  console.log(userId);

  const posts = await getUserPosts(userId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Minhas Postagens</h1>
      {posts.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Você ainda não tem nenhuma postagem.</p>
          <Link
            href="/post/new"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Criar nova postagem
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border rounded p-4 shadow-sm">
              <img
                src={post.imageUrl}
                alt={post.caption || "Post image"}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              {post.caption && <p className="mb-2">{post.caption}</p>}
              <form action={deletePost}>
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="postId" value={post.id} />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Excluir
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
