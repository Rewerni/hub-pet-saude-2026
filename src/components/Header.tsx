import { useState } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Mural", href: "#mural" },
  { label: "Biblioteca", href: "#biblioteca" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex h-14 items-center justify-between">
        {/* Voltar */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-sm font-montserrat text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          <span className="hidden sm:inline">Voltar ao Portal</span>
        </a>

        {/* Brasão central */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-montserrat font-bold text-primary">U</span>
          </div>
        </div>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="story-link text-sm font-montserrat text-foreground/80 hover:text-primary transition-colors"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-montserrat text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
