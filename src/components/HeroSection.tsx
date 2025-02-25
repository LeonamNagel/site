import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const createSparkle = () => {
      if (!heroRef.current) return;
      
      const sparkle = document.createElement('div');
      sparkle.className = 'absolute w-1 h-1 bg-primary rounded-full';
      
      // Random position
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animation = `sparkle ${1 + Math.random()}s ease-in-out`;
      
      heroRef.current.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1000);
    };

    const interval = setInterval(createSparkle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent to-background opacity-50" />
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Ajudo empresas a otimizar seus processos por meio da{" "}
          <span className="gradient-text">Inteligência Artificial</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-muted-foreground max-w-3xl mx-auto px-2">
          Consultorias, Palestras e Workshops personalizados para transformar negócios e aumentar produtividade
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0">
            <Button 
              asChild
              size="lg" 
              className="magic-hover bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <a href="#contact">Entre em contato</a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToNextSection}
              className="magic-hover text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              Saiba mais
            </Button>
          </div>
          
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="magic-hover text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto mx-4 sm:mx-0"
          >
            <a
              href="https://chat.whatsapp.com/BQPbBtn0XniCNXYSp62fWF"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
              Grupo de IA WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}