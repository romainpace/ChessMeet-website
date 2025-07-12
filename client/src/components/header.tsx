import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import chessLogo from "@assets/chess-logo.png";
import chessmeetText from "@assets/chessmeet-text.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex justify-between items-center h-16 xs:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <img src={chessLogo} alt="ChessMeet Logo" className="h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14" />
            <img src={chessmeetText} alt="ChessMeet" className="h-28 xs:h-32 sm:h-34 md:h-36" />
          </Link>

          <div className="hidden md:flex items-center space-x-8" role="navigation">
            <Link
              href="/confidentialite"
              className="text-gray-700 hover:text-primary font-medium transition-colors text-sm lg:text-base"
            >
              Confidentialité
            </Link>
            <Link
              href="/cgu"
              className="text-gray-700 hover:text-primary font-medium transition-colors text-sm lg:text-base"
            >
              Conditions d'utilisation
            </Link>
            <Link
              href="/support"
              className="text-gray-700 hover:text-primary font-medium transition-colors text-sm lg:text-base"
            >
              Support
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden py-4 border-t border-gray-200"
            role="navigation"
            aria-label="Menu mobile"
          >
            <Link
              href="/confidentialite"
              className="block py-3 text-gray-700 hover:text-primary font-medium transition-colors text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Confidentialité
            </Link>
            <Link
              href="/cgu"
              className="block py-3 text-gray-700 hover:text-primary font-medium transition-colors text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Conditions d'utilisation
            </Link>
            <Link
              href="/support"
              className="block py-3 text-gray-700 hover:text-primary font-medium transition-colors text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
