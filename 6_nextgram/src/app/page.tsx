import { getAllPosts } from "@/actions";
import Post from "@/components/Post";
import { auth } from "auth";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();

  const session = await auth();

  let userId = null;

  if (session) {
    userId = session.user.userId;
  }

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} currentUserId={userId} />
        ))}
      </div>
    </main>
  );
}
