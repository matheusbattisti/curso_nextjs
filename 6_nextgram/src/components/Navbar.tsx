import { auth, signIn, signOut } from "auth";
import Link from "next/link";

async function Navbar() {
  const session = await auth();

  console.log(session);

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-bold">
        NextGram
      </Link>
      <div>
        {session && session.user ? (
          <div className="flex gap-4 items-center">
            <p>{session.user.name}</p>
            {session.user.image && (
              <img
                src={session.user.image}
                alt={`${session.user.name}'s profile picture`}
                className="w-10 h-10 rounded-full"
              />
            )}
            <Link href={`/profile/`} className="text-white text-lg font-bold">
              Perfil
            </Link>
            <Link href={`/post/new`} className="text-white text-lg font-bold">
              Criar postagem
            </Link>
            <Link href={`/my-posts`} className="text-white text-lg font-bold">
              Minhas Postagens
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Sair
              </button>
            </form>
          </div>
        ) : (
          <Link
            href={`/signin`}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Entrar
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
