import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/todos/create">Criar tarefa</Link>
      <h1>Todos!</h1>
    </main>
  );
}
