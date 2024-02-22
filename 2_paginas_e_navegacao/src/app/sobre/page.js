import Link from "next/link";

export default function SobrePage() {
  return (
    <div>
      <h1>Página Sobre</h1>
      <p>Esta é a página sobre.</p>
      <Link href="/">Voltar para a Página Inicial</Link>
    </div>
  );
}
