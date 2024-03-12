export default async function TodoCreate() {
  const addTodo = async (formData) => {
    "use server";

    console.log(formData);
  };

  return (
    <form action={addTodo} className="flex flex-col gap-4">
      <input type="text" name="title" placeholder="Title" required />
      <textarea name="description" placeholder="Description" required />
      <button type="submit">Create Todo</button>
    </form>
  );
}
