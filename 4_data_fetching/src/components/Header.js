import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/todos/create">
          <a className="hover:underline">Criar Tarefa</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
