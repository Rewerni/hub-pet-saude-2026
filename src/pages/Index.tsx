import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CheckInSection from "@/components/CheckInSection";
import ResourceHub from "@/components/ResourceHub";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CheckInSection />
        <ResourceHub />
      </main>
      <footer className="py-8 text-center font-opensans text-sm text-muted-foreground border-t border-border">
        © 2025 PET Saúde · UNCISAL — Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;
