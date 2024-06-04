import { getAllPosts } from "@/actions";
import Post from "@/components/Post";
import { auth } from "auth";

export default async function Home() {
  const posts = await getAllPosts();

  const session = await auth();

  let userId = null;

  if (session) {
    userId = session.user.userId;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 my-10">
      <h1 className="text-[2rem] leading-10 font-semibold">
        Confira os posts mais recentes
      </h1>
      <div>
        {posts && posts.length > 0 ? (
          <div className="mt-8">
            {posts.map((post) => (
              <Post post={post} currentUserId={userId} key={post.id} />
            ))}
          </div>
        ) : (
          <p className="mt-6 font-medium">Ainda não há posts</p>
        )}
      </div>
    </main>
  );
}
