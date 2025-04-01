/**
 * PortfolioSection Component
 * 
 * This component displays the trajectory section of the portfolio, highlighting
 * experience across different sectors such as textile industry, educational institutions,
 * and public sector. It renders a list of cards with emojis, titles, and descriptions.
 */
import { Card } from "@/components/ui/card";

export function PortfolioSection() {
  const trajectoryItems = [
    {
      title: "Setor Têxtil em SC",
      emoji: "🧵",
      description: "A parceria com o SCMC levou meus workshops às maiores empresas têxteis de Santa Catarina, como Altenburg, Karsten, Diklatex, Museu Hering e Círculo entre outras."
    },
    {
      title: "Instituições Educacionais",
      emoji: "🏫",
      description: "Com o Senai (SC e GO), Inaed (MA), Unifatecie, TI Exames e Favela Filmes (RJ) atuei na capacitação de equipes e no desenvolvimento de projetos com foco em IA Generativa."
    },
    {
      title: "Setor Público",
      emoji: "🏛️",
      description: "No Ceará fiz uma série de workshops na CAGECE e teremos um 2025 juntos com projetos de inovação e IA."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Trajetória</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Em 2024, visitei mais de 40 empresas com palestras, workshops e consultorias,
            impactando diferentes setores e ajudando a implementar soluções em Inteligência
            Artificial Generativa.
          </p>

          <div className="space-y-6">
            {trajectoryItems.map((item, index) => (
              <Card key={index} className="p-6 bg-accent/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <div className="ml-11">
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}