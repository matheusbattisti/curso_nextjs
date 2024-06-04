import Image from "next/image";
import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="sm:px-16 py-4 px-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-2 flex-wrap bg-slate-800">
      <p className="text-base font-bold text-white order-3 sm:order-1">
        &copy; Animes List - 2024
      </p>

      <div className="relative w-12 h-12 order-1 sm:order-2">
        <Image
          src="/weapon.png"
          alt="logo"
          fill
          sizes="auto"
          className="object-fill"
        />
      </div>

      <div className="flex items-center gap-6 order-2 sm:order-3">
        <Link href="https://www.youtube.com/@MatheusBattisti" target="_blanck">
          <IoLogoYoutube className="text-[1.5rem]" />
        </Link>

        <Link href="https://www.instagram.com/horadecodar/" target="_blanck">
          <IoLogoInstagram className="text-[1.5rem]" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/matheusbattisti/"
          target="_blanck"
        >
          <IoLogoLinkedin className="text-[1.5rem]" />
        </Link>
      </div>
    </footer>
  );
};
