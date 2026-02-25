import { Sprout } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-20 sm:py-28 px-4 bg-background"
    >
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        {/* Plant icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
          <Sprout size={32} className="text-primary" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold text-foreground leading-tight mb-2">
          Entre Cuidados
        </h1>

        <p className="text-lg sm:text-xl font-montserrat font-normal text-foreground/70 mb-4">
          Autocuidado do Cuidador
        </p>

        <p className="text-base sm:text-lg font-opensans text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Recursos e estratégias para o bem-estar de quem dedica a vida a cuidar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#mural"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-montserrat font-bold text-base px-8 py-3.5 hover:bg-primary/90 transition-all duration-200 hover-scale shadow-lg"
          >
            Acessar Mural
          </a>
          <a
            href="#biblioteca"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary font-montserrat font-bold text-base px-8 py-3.5 hover:bg-accent transition-all duration-200"
          >
            Explorar Biblioteca
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
