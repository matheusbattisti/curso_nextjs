"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Page = () => {
  const { data: session } = useSession();

  if (!session || !session.user) return <p>Você precisa estar autenticado!</p>;

  return (
    <div>
      <h1>Página client component protegida</h1>
    </div>
  );
};

export default Page;
