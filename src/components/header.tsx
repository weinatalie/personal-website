"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const getStatus = (path: string) =>
    `animate-underline ${pathName === path ? "active" : ""}`;

  return (
    <header className="w-full">
      <div
        style={{ fontFamily: "var(--heading-font)" }}
        className="flex items-center justify-between px-12 py-14"
      >
        <span className="text-[0.875rem]">placeholder</span>

        <nav className="flex gap-8 text-[0.875rem] italic">
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
