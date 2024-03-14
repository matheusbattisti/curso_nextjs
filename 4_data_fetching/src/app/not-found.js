import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <p>Página não encontrada!</p>
      <Link href="/">Voltar</Link>
    </div>
  );
};

export default NotFound;
