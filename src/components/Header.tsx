import { Button } from "@/components/ui/button";
import { TrendingUp, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-gold" />
            <h1 className="text-2xl font-bold text-foreground">
              TopTrader <span className="text-gold">Zambia</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#episodes" className="text-foreground hover:text-gold transition-colors">
              Episodes
            </a>
            <a href="#guests" className="text-foreground hover:text-gold transition-colors">
              Top Traders
            </a>
            <a href="#mentorship" className="text-foreground hover:text-gold transition-colors">
              Mentorship
            </a>
            <a href="#about" className="text-foreground hover:text-gold transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-gold transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Listen Now</Button>
            <Button variant="hero">Get Mentorship</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;