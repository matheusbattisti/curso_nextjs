import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  // 3 - Resgatando dados do banco
  const todos = await db.todo.findMany();

  console.log(todos);

  return (
    <main>
      <Link href="/todos/create">Criar tarefa</Link>
      <h1>Todos!</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.titulo}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
