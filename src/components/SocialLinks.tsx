import { Mail, Instagram, Linkedin } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText("contato@leonamnagel.page");
    toast({
      description: "Email copiado para a área de transferência!",
      duration: 2000,
    });
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={copyEmail}
              className="hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copiar email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <a
        href="https://www.instagram.com/leonamnagel/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        <Instagram className="h-5 w-5" />
      </a>

      <a
        href="https://www.tiktok.com/@leonamnagel"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        <TikTokIcon className="h-5 w-5" />
      </a>

      <a
        href="https://www.linkedin.com/in/leonamnagel/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </a>
    </div>
  );
}