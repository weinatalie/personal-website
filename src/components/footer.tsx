export default function Footer() {
    return (
      <footer className="w-full fixed bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-[var(--background-color)] to-transparent flex items-end pointer-events-none">
        <div
          style={{ fontFamily: 'var(--heading-font)' }}
          className="flex w-full items-center justify-between px-12 py-6 text-[var(--secondary)]"
        >
        </div>
      </footer>
    );
  }