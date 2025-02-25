import { Card } from "@/components/ui/card";
import { Presentation, Lightbulb, Palette, Building2 } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Presentation className="h-8 w-8" />,
      title: "Palestras para Conscientizar sua Equipe",
      description: "Apresento como a IA Generativa pode transformar negócios de forma prática e inspiradora."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Workshops sobre o Uso da IA para TI",
      description: "Capacito sua equipe para automatizar processos e criar códigos com eficiência usando IA."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Workshops para Equipes de Marketing e Criação",
      description: "Mostro como aplicar IA em campanhas, análise de dados, áudio, imagens, vídeos e músicas."
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Consultoria para Criação de um Projeto de IA na Empresa",
      description: "Acompanho mensalmente sua empresa na implementação estratégica de IA."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-card relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 gradient-text px-2">
          Como posso ajudar sua empresa?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="magic-card p-4 sm:p-6 bg-accent/50 hover:bg-accent/60 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1 transition-transform duration-500 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 glow-text">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}