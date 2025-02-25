import { Mail, Instagram, Linkedin } from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactPage() {
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText("contato@leonamnagel.page");
    toast({
      description: "Email copiado para a área de transferência!",
      duration: 2000,
    });
  };

  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/leonamnagel/",
      username: "@leonamnagel"
    },
    {
      icon: <TikTokIcon className="h-6 w-6" />,
      label: "TikTok",
      href: "https://www.tiktok.com/@leonamnagel",
      username: "@leonamnagel"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leonamnagel/",
      username: "Leonam Nagel"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
            Entre em Contato
          </h1>

          {/* Email Card */}
          <Card className="p-6 mb-8 bg-card hover:bg-accent/50 transition-colors group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="text-lg font-semibold mb-1">Email</h2>
                  <p className="text-muted-foreground">contato@leonamnagel.page</p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={copyEmail}
                className="hover:text-primary hover:border-primary transition-colors"
              >
                Copiar
              </Button>
            </div>
          </Card>

          {/* Social Media Links */}
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 bg-card hover:bg-accent/50 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold mb-1">{link.label}</h2>
                        <p className="text-muted-foreground">{link.username}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="hover:text-primary transition-colors"
                    >
                      Visitar
                    </Button>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}