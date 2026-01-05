export default function Header() {
  return (
    <header className="w-full">
      <div
        style={{ fontFamily: "var(--heading-font)" }}
        className="flex items-center justify-between px-12 py-14"
      >
        <span className="text-[0.875rem]">placeholder</span>

        <nav className="flex gap-8 text-[0.875rem] italic">
          <a
            href="/"
            className="animate-underline"
          >
            about
          </a>
          <a
            href="/play"
            className="animate-underline"
          >
            play
          </a>
        </nav>
      </div>
    </header>
  );
}
