import { auth } from "auth";
import React from "react";

const page = async () => {
  const session = await auth();

  if (!session || !session.user) return <p>Você precisa estar autenticado!</p>;

  return <div>Esta é uma página de server components protegida.</div>;
};

export default page;
