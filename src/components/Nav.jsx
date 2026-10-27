import { Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      {/* Same width as the page text */}
      <div className="column">
        <nav className="flex w-full items-center justify-between rounded-full border border-border bg-surface/80 p-1.5 backdrop-blur-xl card-shadow">
          <div className="flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-2.5 py-1.5 text-sm text-muted transition-colors hover:bg-surfacealt hover:text-ink sm:px-3"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
            >
              <Mail className="h-3.5 w-3.5" />
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
