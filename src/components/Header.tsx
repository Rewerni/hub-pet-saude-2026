import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="#"
          className="flex items-center gap-2 text-sm font-opensans text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar para Portal
        </a>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <span className="text-xs font-montserrat font-bold text-primary-foreground">U</span>
          </div>
          <span className="hidden sm:inline font-montserrat font-bold text-sm text-primary">
            UNCISAL
          </span>
        </div>

        <div className="w-[140px]" />
      </div>
    </header>
  );
};

export default Header;
