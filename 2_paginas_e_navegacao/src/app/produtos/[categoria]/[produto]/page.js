export default function ProdutoPage({ params }) {
  return (
    <div>
      <h1>Produto: {params.produto}</h1>
      <p>Categoria: {params.categoria}</p>
    </div>
  );
}
