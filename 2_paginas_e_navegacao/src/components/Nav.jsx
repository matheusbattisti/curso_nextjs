"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/sobre" ? "active" : ""}`}
            href="/sobre"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
