import { useScroll } from "@/hooks/use-scroll";
import { NavLinks } from "@/components/NavLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { NavbarMobile } from "@/components/NavbarMobile";

export function Navbar() {
  const isVisible = useScroll();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isVisible
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            {/* Mobile Navigation */}
            <div className="flex items-center gap-4 md:hidden">
              <NavbarMobile>
                <NavLinks 
                  className="flex flex-col space-y-4"
                  itemClassName="text-foreground hover:text-primary transition-colors px-4 py-2"
                 showName={false}
                />
                <SocialLinks className="px-4 mt-4" />
              </NavbarMobile>
              
              {/* Mobile Name */}
              <span className="text-xl font-bold gradient-text">
                Leonam Nagel
              </span>
            </div>

            {/* Desktop Navigation */}
            <NavLinks 
              className="hidden md:flex items-center space-x-8"
              itemClassName="text-foreground hover:text-primary transition-colors"
              showName={true}
            />

            {/* Social Links - Desktop */}
            <SocialLinks className="hidden md:flex" />
          </div>
        </div>
      </div>
    </nav>
  );
}