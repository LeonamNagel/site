import { Card } from "@/components/ui/card";
import { Brain, Bot, LineChart, Cpu } from "lucide-react";

export function DetailedServicesSection() {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Desenvolvimento de modelos preditivos e análise de dados avançada"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Chatbots Inteligentes",
      description: "Automação de atendimento com processamento de linguagem natural"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Análise Preditiva",
      description: "Previsões baseadas em dados históricos e tendências"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Automação de Processos",
      description: "Otimização de workflows com inteligência artificial"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços em Detalhes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-accent/50">
              <div className="flex items-start gap-4">
                <div className="text-foreground">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}