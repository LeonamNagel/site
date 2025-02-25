import { Instagram, Linkedin } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText("contato@leonamnagel.page");
    toast({
      description: "Email copiado para a área de transferência!",
      duration: 2000,
    });
  };

  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Leonam Nagel, o simplificador de IA
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Palestras para Equipes</li>
              <li>Workshops de IA para TI</li>
              <li>Workshops para Marketing</li>
              <li>Consultoria em IA</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://leonamnagel.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Curso: IA Generativa na Prática
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Mim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <button
                onClick={copyEmail}
                className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                contato@leonamnagel.page
              </button>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/leonamnagel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@leonamnagel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonamnagel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © 2024 Leonam Nagel. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}