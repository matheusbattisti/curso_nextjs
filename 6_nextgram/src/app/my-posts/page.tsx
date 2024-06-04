import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getUserPosts, deletePost } from "@/actions";
import { Post as PostType } from "types/Post";
import { auth } from "auth";
import { redirect } from "next/navigation";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

const MyPosts: React.FC = async () => {
  const session = await auth();

  let userId = null;

  if (session) {
    userId = session.user.userId;
  } else {
    redirect("/");
  }

  const posts = await getUserPosts(userId);

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-[2rem] leading-20 font-semibold mb-8">
        Minhas Postagens
      </h1>
      {posts.length === 0 ? (
        <div className="text-center">
          <p className="mb-4 font-medium">
            Você ainda não tem nenhuma postagem.
          </p>

          <div className="flex justify-center">
            <ButtonLink text="Criar nova postagem" url="/post/new" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border rounded p-4 shadow-sm">
              <Image
                src={post.imageUrl}
                alt={post.caption || "Post image"}
                className="w-[366px] h-[218px] object-cover mb-4 rounded"
                width={366}
                height={218}
              />
              {post.caption && (
                <p className="mb-2 text-sm font-medium">{post.caption}</p>
              )}
              <form action={deletePost}>
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="postId" value={post.id} />
                <div className="flex justify-end">
                  <Button type="submit" text="Excluir" danger={true} />
                </div>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
