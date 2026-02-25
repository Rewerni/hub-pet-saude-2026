import { MessageCircle, BookOpen, ShieldCheck, type LucideIcon } from "lucide-react";

interface PillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PillarCard = ({ icon: Icon, title, description }: PillarProps) => (
  <div className="flex flex-col items-center text-center p-6 animate-slide-up">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
      <Icon size={26} className="text-accent-foreground" strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">{title}</h3>
    <p className="font-opensans text-muted-foreground text-base leading-relaxed">{description}</p>
  </div>
);

const pillars = [
  {
    icon: MessageCircle,
    title: "Compartilhe",
    description: "Um mural anônimo para trocar experiências e mensagens de apoio com outros cuidadores.",
  },
  {
    icon: BookOpen,
    title: "Aprenda",
    description: "Dicas rápidas, práticas educativas e recursos sobre saúde mental e bem-estar.",
  },
  {
    icon: ShieldCheck,
    title: "Confie",
    description: "Ambiente seguro, sem cadastro e sem julgamentos. Seu acolhimento é prioridade.",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground text-center mb-12">
          Como este espaço funciona
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <PillarCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
