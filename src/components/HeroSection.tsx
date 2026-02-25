const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold mb-6 leading-tight">
          Autocuidado do Cuidador
        </h1>
        <p className="text-lg sm:text-xl font-opensans font-normal leading-relaxed opacity-90 max-w-2xl mx-auto">
          Você dedica seu tempo e energia ao cuidado de outras pessoas. Aqui é o seu espaço para
          pausar, respirar e encontrar recursos que fortaleçam o seu bem-estar.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
