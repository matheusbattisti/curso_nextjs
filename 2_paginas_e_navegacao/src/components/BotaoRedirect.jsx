"use client";

import { useRouter } from "next/navigation";

export default function BotaoRedirect() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
}
