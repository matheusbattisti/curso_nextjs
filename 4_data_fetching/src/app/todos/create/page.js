import { db } from "@/db.js";
import { redirect } from "next/navigation";

// 1 - Criacao do form
export default async function TodoCreate() {
  const addTodo = async (formData) => {
    "use server";

    console.log(formData);

    // 2 - Inserindo dados no banco
    const titulo = formData.get("titulo");
    const descricao = formData.get("descricao");
    const status = "pendente";

    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
        status,
      },
    });

    console.log(todo);

    redirect("/");
  };

  return (
    <form action={addTodo} className="flex flex-col gap-4">
      <input type="text" name="titulo" placeholder="Título" required />
      <textarea name="descricao" placeholder="Descrição" required />
      <button type="submit">Criar Todo</button>
    </form>
  );
}
