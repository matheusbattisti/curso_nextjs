"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type NavbarLink = {
  id: number;
  name: string;
  path: string;
};

const links: NavbarLink[] = [
  { id: 1, name: "Todos", path: "/" },
  { id: 2, name: "Mais avaliados", path: "/most-rated" },
  { id: 3, name: "Mais populares", path: "/most-popular" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="max-w-7xl mx-auto w-full px-10 py-4 flex justify-between items-center bg-slate-800 fixed z-10">
      <Link href="/" className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          <Image
            src="/weapon.png"
            alt="logo"
            fill
            sizes="auto"
            className="object-fill"
          />
        </div>
        <span className="font-medium tracking-wide">Animes List</span>
      </Link>

      <nav className="hidden sm:block">
        <ul className="flex gap-3 font-medium tracking-wide">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                passHref
                className={`hover:underline hover:underline-offset-4 hover:text-slate-100 ${
                  pathname === link.path
                    ? "text-slate-100 underline underline-offset-4"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sm:hidden">
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <GiHamburgerMenu className="text-[2rem]" />
        </button>

        <nav
          className={`absolute z-10 top-[80px] bg-slate-700 transition-all duration-300 ${
            showMenu ? "right-0" : "-right-[100%]"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 font-medium tracking-wide w-full h-screen p-10">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  passHref
                  className={
                    pathname === link.path
                      ? "text-slate-100 underline underline-offset-4"
                      : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
