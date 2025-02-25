import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Agende uma consultoria gratuita e descubra como a IA pode revolucionar sua empresa
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Agendar Consultoria Gratuita
        </Button>
      </div>
    </section>
  );
}