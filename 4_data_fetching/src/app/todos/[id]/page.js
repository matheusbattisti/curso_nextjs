// 5 - pagina dinamica com request
import { db } from "@/db";

export default async function TodoShow(props) {
  const id = Number(props.params.id);

  const todo = await db.todo.findFirst({
    where: { id },
  });

  return <div>{todo.titulo}</div>;
}
