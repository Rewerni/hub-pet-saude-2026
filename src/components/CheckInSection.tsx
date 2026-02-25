import { useState } from "react";
import { Smile, Frown, CloudRain } from "lucide-react";

const feelings = [
  {
    label: "Bem / Levando",
    icon: Smile,
    color: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
  },
  {
    label: "Sobrecarregado",
    icon: CloudRain,
    color: "bg-amber-500 hover:bg-amber-600 text-primary-foreground",
  },
  {
    label: "Triste / Ansioso",
    icon: Frown,
    color: "bg-rose-500 hover:bg-rose-600 text-primary-foreground",
  },
];

const CheckInSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-14 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-foreground mb-3">
          Como você está se sentindo agora?
        </h2>
        <p className="font-opensans text-muted-foreground mb-8">
          Não existe resposta certa. O primeiro passo é reconhecer como você está.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          {feelings.map((f) => {
            const Icon = f.icon;
            const isSelected = selected === f.label;
            return (
              <button
                key={f.label}
                onClick={() => setSelected(f.label)}
                className={`flex flex-col items-center gap-3 rounded-lg p-6 font-montserrat font-bold text-base transition-all duration-200 ${f.color} ${
                  isSelected ? "ring-4 ring-ring scale-105 shadow-lg" : "shadow-md"
                }`}
              >
                <Icon size={32} strokeWidth={1.5} />
                {f.label}
              </button>
            );
          })}
        </div>

        {selected && (
          <p className="mt-6 font-opensans text-muted-foreground animate-in fade-in duration-500">
            Obrigado por compartilhar. Lembre-se: cuidar de si é também cuidar do outro. 💙
          </p>
        )}
      </div>
    </section>
  );
};

export default CheckInSection;
