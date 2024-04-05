"use client";

import { updateTodo } from "@/actions";
import { useFormState } from "react-dom";

const TodoForm = ({ todo }) => {
  const [formState, action] = useFormState(updateTodo, { errors: "" });

  return (
    <form
      className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      action={action}
    >
      {formState.errors ? (
        <div className="my-4 p-2 bg-red-400 border border-red-600">
          {formState.errors}
        </div>
      ) : (
        ""
      )}

      <input type="hidden" name="id" defaultValue={todo.id} />

      <label
        htmlFor="titulo"
        className="block text-sm font-medium text-gray-700"
      >
        Título
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Insira o título"
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          defaultValue={todo.titulo}
        />
      </label>
      <label
        htmlFor="descricao"
        className="block text-sm font-medium text-gray-700"
      >
        Descrição
        <textarea
          id="descricao"
          name="descricao"
          placeholder="Descreva a tarefa"
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32 resize-none"
          defaultValue={todo.descricao}
        ></textarea>
      </label>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Editar
      </button>
    </form>
  );
};

export default TodoForm;
