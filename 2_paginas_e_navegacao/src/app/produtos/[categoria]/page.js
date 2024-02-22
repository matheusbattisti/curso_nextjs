import Link from "next/link";

export default function CategoriaPage({ params }) {
  return (
    <div>
      <h1>Categoria: {params.categoria}</h1>
      <Link href="/produtos/roupas/camisa">Produto A</Link>
    </div>
  );
}
