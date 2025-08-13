import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, X, Building2 } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentView: 'home' | 'packages';
  onBackToHome: () => void;
}

export const Header = ({ onNavigate, currentView, onBackToHome }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", action: () => onBackToHome() },
    { name: "Top Packages", action: () => onNavigate("packages") },
    { name: "Domestic", action: () => onNavigate("domestic") },
    { name: "International", action: () => onNavigate("international") },
    { name: "About", action: () => onNavigate("about") },
    { name: "Contact", action: () => onNavigate("contact") },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (item: any) => {
    if (currentView === 'packages') {
      item.action();
    } else {
      if (item.name === "Home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (item.name === "Top Packages") {
        scrollToSection("top-packages");
      } else if (item.name === "Domestic") {
        scrollToSection("destinations");
      } else if (item.name === "International") {
        scrollToSection("destinations");
      } else if (item.name === "About") {
        scrollToSection("about");
      } else if (item.name === "Contact") {
        scrollToSection("footer");
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <div className="text-primary-foreground text-xl">🛕</div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">Mantra</h1>
            <span className="text-xs text-muted-foreground">Miles</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => handleNavigation(item)}
            >
              {item.name}
            </Button>
          ))}
          <Button variant="default" className="ml-4">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="justify-start text-foreground hover:text-primary"
                onClick={() => handleNavigation(item)}
              >
                {item.name}
              </Button>
            ))}
            <Button variant="default" className="mt-4">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};