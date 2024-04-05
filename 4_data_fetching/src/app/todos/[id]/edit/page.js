import { editTodo, findTodoById } from "@/actions";
import TodoForm from "@/components/TodoForm";

import { notFound } from "next/navigation";

export default async function TodoEdit(props) {
  const id = parseInt(props.params.id);

  const todo = await findTodoById(id);

  if (!todo) return notFound();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Editando: {todo.titulo}
      </h1>
      <TodoForm todo={todo} />
    </div>
  );
}
