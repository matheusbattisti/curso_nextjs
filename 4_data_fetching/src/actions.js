"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = parseInt(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  revalidatePath("/");

  redirect("/");
}

export async function addTodo(formData) {
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
}

export async function findTodoById(id) {
  // 11 - erro backend - error.js
  // throw new Error("Ops!");

  const todo = await db.todo.findFirst({
    where: { id },
  });

  return todo;
}

export async function updateTodo(formState, formData) {
  const id = parseInt(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  if (titulo.length < 5) {
    return {
      errors: "O título precisa de pelo menos 5 caracteres.",
    };
  }

  if (descricao.length < 10) {
    return {
      errors: "A descrição precisa de pelo menos 10 caracteres.",
    };
  }

  await db.todo.update({
    where: { id },
    data: {
      titulo,
      descricao,
    },
  });

  redirect("/");
}

export async function toggleTodoStatus(formData) {
  const todoId = parseInt(formData.get("id"));

  // Busca o todo com o ID fornecido.
  const todo = await db.todo.findUnique({
    where: {
      id: todoId,
    },
  });

  // Verifica se o todo existe; se não, lança um erro.
  if (!todo) {
    throw new Error("Todo não encontrado");
  }

  // Determina o novo status baseado no status atual.
  const novoStatus = todo.status === "pendente" ? "completa" : "pendente";

  // Atualiza o todo no banco de dados com o novo status.
  await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      status: novoStatus,
    },
  });

  // Redireciona o usuário para a página inicial (ou outra página conforme necessário).
  redirect("/");
}
