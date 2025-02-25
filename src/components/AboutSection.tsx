export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 bg-card">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Sobre Mim</h2>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start">
            {/* Photo Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary-light/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/Leonam-palco.jpg"
                  alt="Leonam Nagel no palco durante uma palestra"
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>
                Minha jornada com a <span className="text-foreground font-semibold">Inteligência Artificial Generativa</span> nasceu
                da minha curiosidade nerd e da vontade de explorar como essa tecnologia pode
                transformar empresas, impulsionar a criatividade e redefinir a maneira como
                trabalhamos.
              </p>

              <p>
                Sempre fui curioso e inquieto, o que me levou a empreender em diversas áreas
                ao longo da vida. Com uma trajetória que mistura experiências em teatro,
                audiovisual, criação de conteúdos e projetos empreendedores, procuro unir a
                criatividade ao uso estratégico da IA.
              </p>

              <p>
                Quando não estou conduzindo palestras ou workshops, estou pesquisando
                tendências, testando novas ferramentas e buscando formas de tornar a
                <span className="text-foreground font-semibold"> tecnologia ainda mais próxima</span> de
                quem deseja inovar.
              </p>

              <p>
                Acredito que a IA é uma grande aliada, e meu papel é
                <span className="text-foreground font-semibold"> guiar empresas e pessoas</span> para
                aproveitarem todo o seu potencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}