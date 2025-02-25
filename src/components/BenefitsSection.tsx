import { Card } from "@/components/ui/card";
import { Rocket, Cpu, LineChart, PiggyBank, Lightbulb, Link2 } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Maior eficiência e produtividade",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Transformação digital",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Decisões mais Informadas",
    },
    {
      icon: <PiggyBank className="h-6 w-6" />,
      title: "Redução de custos",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Inovação em produtos e serviços",
    },
    {
      icon: <Link2 className="h-6 w-6" />,
      title: "Integração de ferramentas e sistemas",
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-accent/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Benefícios</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2 text-left">
            A Inteligência Artificial Generativa está transformando as empresas ao otimizar 
            processos, reduzir custos e aumentar a competitividade. O meu trabalho é ajudar 
            sua empresa a aproveitar esses benefícios rapidamente:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-4 sm:p-6 bg-card hover:bg-accent/60 transition-colors group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-foreground group-hover:text-primary transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold">{benefit.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}