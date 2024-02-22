"use client";

import { useSearchParams } from "next/navigation";

const Exemplo = () => {
  const searchParams = useSearchParams();

  const param = searchParams.get("parametro");

  return (
    <div>
      <h1>Página de Exemplo</h1>
      <p>O parâmetro recebido é: {param}</p>
    </div>
  );
};

export default Exemplo;
