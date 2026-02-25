import { useState } from "react";
import { Smile, CloudRain, Frown, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeelingOption {
  id: string;
  label: string;
  icon: LucideIcon;
  message: string;
  tip: string;
  cta?: { label: string; href: string };
}

const feelings: FeelingOption[] = [
  {
    id: "bem",
    label: "Bem / Levando",
    icon: Smile,
    message:
      "Que bom saber! Mesmo nos dias bons, pequenas pausas ajudam a manter o equilíbrio. Aproveite esse momento de leveza.",
    tip: "💡 Dica: Reserve 5 minutos do seu dia para fazer algo que te dá prazer — sem culpa.",
  },
  {
    id: "sobrecarregado",
    label: "Sobrecarregado",
    icon: CloudRain,
    message:
      "A sobrecarga muitas vezes nos coloca no piloto automático. Reconhecer isso já é um ato de coragem. Vamos fazer uma micro-pausa juntos?",
    tip: "⏸️ Micro-pausa de 10 segundos: Feche os olhos, inspire contando até 4, segure por 4 segundos e expire lentamente contando até 6. Repita 3 vezes.",
    cta: { label: "Visitar a Biblioteca", href: "#biblioteca" },
  },
  {
    id: "triste",
    label: "Triste / Ansioso",
    icon: Frown,
    message:
      "Seus sentimentos são válidos. Pedir ajuda não é fraqueza — é sabedoria. Você não precisa passar por isso sozinho(a).",
    tip: "🤝 Lembre-se: o CVV (188) está disponível 24h para conversar. Não hesite em buscar apoio profissional.",
    cta: { label: "Acessar Mural de Apoio", href: "#mural" },
  },
];

const CheckInSection = () => {
  const [selected, setSelected] = useState<FeelingOption | null>(null);

  return (
    <section className="py-16 px-4" id="checkin">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground mb-3">
          Como você está se sentindo agora?
        </h2>
        <p className="font-opensans text-muted-foreground mb-10">
          Não existe resposta certa. O primeiro passo é reconhecer como você está.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {feelings.map((f) => {
            const Icon = f.icon;
            const isActive = selected?.id === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setSelected(f)}
                className={`group flex flex-col items-center gap-3 rounded-lg p-6 font-montserrat text-base transition-all duration-300 border-2 ${
                  isActive
                    ? "border-primary bg-accent text-accent-foreground shadow-md scale-[1.03]"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
                <span className="font-montserrat font-bold">{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic response */}
        {selected && (
          <div
            key={selected.id}
            className="mx-auto max-w-lg rounded-xl bg-accent/50 border border-primary/20 p-6 text-left animate-fade-in"
          >
            <p className="font-opensans text-foreground leading-relaxed mb-4">
              {selected.message}
            </p>
            <p className="font-opensans text-muted-foreground text-sm leading-relaxed mb-4 bg-card rounded-lg p-4">
              {selected.tip}
            </p>
            {selected.cta && (
              <a
                href={selected.cta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground font-montserrat font-bold text-sm px-6 py-2.5 hover:bg-primary/90 transition-all duration-200 hover-scale"
              >
                {selected.cta.label}
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckInSection;
