import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  // 3 - Resgatando dados do banco
  const todos = await db.todo.findMany();

  console.log(todos);

  return (
    <>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Todos!</h1>
        <div className="space-y-4">
          {todos.map((todo) => (
            <div key={todo.id} className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{todo.titulo}</h2>
              <p>{todo.descricao}</p>
              <div className="flex space-x-2 mt-3">
                <Link href={`/todos/${todo.id}`}>
                  <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Visualizar
                  </a>
                </Link>
                <Link href={`/todos/edit/${todo.id}`}>
                  <a className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Editar
                  </a>
                </Link>
                <button
                  onClick={() => console.log("Excluir:", todo.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
