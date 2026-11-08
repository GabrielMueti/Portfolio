import { useState } from "react";

function Navbar({ name, hasAbout }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    ...(hasAbout ? [{ label: "About", href: "#about" }] : []),
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-slate-900">
          {name}
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <ul className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-700 hover:text-indigo-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;