import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavbarMobileProps {
  children: React.ReactNode;
}

export function NavbarMobile({ children }: NavbarMobileProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] bg-background">
          <SheetTitle className="text-lg font-semibold mb-4">Menu de Navegação</SheetTitle>
          <nav className="flex flex-col space-y-4 mt-8">
            {children}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}