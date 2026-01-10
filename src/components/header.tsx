"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerImage from "../images/header.png";

export default function Header() {
  const pathName = usePathname();
  const getStatus = (path: string) =>
    `animate-header-underline ${pathName === path ? "active" : ""}`;

  return (
    <header className="w-full">
      <div
        style={{ fontFamily: "var(--heading-font)" }}
        className="flex items-center justify-between px-24 py-14"
      >
        <span></span>

        <nav className="flex gap-12 text-[0.875rem] italic">
          <Link href="/" className={getStatus("/")}>
            about
          </Link>
          <Link href="/play" className={getStatus("/play")}>
            play
          </Link>
        </nav>
      </div>
    </header>
  );
}
