import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">Lista de Tarefas</Link>
        <Link href="/todos/create">Criar Tarefa</Link>
      </nav>
    </header>
  );
};

export default Header;
