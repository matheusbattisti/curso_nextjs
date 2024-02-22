import Link from "next/link";

export default function HomePage() {
  // Suponha que temos um array de IDs de posts
  const postIds = [1, 2, 3];

  return (
    <div>
      <h1>Página Inicial</h1>
      <ul>
        {postIds.map((id) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>Ver Post {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
