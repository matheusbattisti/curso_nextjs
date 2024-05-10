import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link href="/client">Página client component</Link>
        <Link href="/server">Página server component</Link>
        <Link href="/middleware">Página middleware</Link>
      </div>
    </main>
  );
}
