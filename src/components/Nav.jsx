import { Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1.5 backdrop-blur-xl card-shadow">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surfacealt hover:text-ink"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-0.5 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
        >
          <Mail className="h-3.5 w-3.5" />
          Contact
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Nav;
