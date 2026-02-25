import { Users, BookOpen, PenLine, type LucideIcon } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
}

const ResourceCard = ({ title, description, tag, icon: Icon }: ResourceCardProps) => (
  <div className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
      <Icon size={24} className="text-accent-foreground" strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-montserrat font-bold text-foreground mb-2">{title}</h3>
    <p className="font-opensans text-muted-foreground text-base mb-5 flex-1 leading-relaxed">
      {description}
    </p>
    <span className="inline-block self-start rounded-md bg-secondary px-3 py-1 text-xs font-montserrat font-bold text-muted-foreground uppercase tracking-wider">
      {tag}
    </span>
  </div>
);

const resources = [
  {
    title: "Mural de Apoio Coletivo",
    description:
      "Compartilhe e leia mensagens de apoio de outros cuidadores. Você não está sozinho(a).",
    tag: "WEB APP",
    icon: Users,
  },
  {
    title: "Biblioteca de Recursos",
    description:
      "Acesse materiais sobre saúde mental, técnicas de relaxamento e guias práticos.",
    tag: "PDF",
    icon: BookOpen,
  },
  {
    title: "Espaço de Reflexão",
    description:
      "Um diário guiado para organizar seus pensamentos e cultivar o autoconhecimento.",
    tag: "WEB APP",
    icon: PenLine,
  },
];

const ResourceHub = () => {
  return (
    <section className="py-16 px-4 bg-secondary" id="biblioteca">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground text-center mb-10">
          Recursos para Você
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => (
            <ResourceCard key={r.title} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;
