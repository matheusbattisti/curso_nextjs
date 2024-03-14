import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <p>Todo não encontrado!</p>
      <Link href="/">Voltar</Link>
    </div>
  );
};

export default NotFound;
