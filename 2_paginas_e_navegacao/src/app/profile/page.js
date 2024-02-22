import { redirect } from "next/navigation";

export default async function Profile({ params }) {
  const userExists = false;

  if (!userExists) {
    redirect("/"); // Redireciona para a página inicial se a condição for falsa
  }

  // Se a condição fosse verdadeira, renderizaria o perfil do usuário
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Informações do usuário seriam exibidas aqui se existissem.</p>
    </div>
  );
}
