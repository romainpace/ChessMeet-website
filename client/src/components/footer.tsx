import { Link } from "wouter";
import chessKnightLogo from "@assets/chess-knight-logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="flex items-center space-x-2">
            <img
              src={chessKnightLogo}
              alt="ChessMeet Logo"
              className="h-8 w-8 brightness-0 invert"
            />
            <span className="text-xl font-bold" style={{ fontFamily: "serif" }}>
              ChessMeet
            </span>
          </div>

          <div className="text-center">
            <p className="text-white/60 text-xs">© 2025 ChessMeet. Tous droits réservés.</p>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link
              href="/confidentialite"
              className="text-white/60 hover:text-white transition-colors text-xs"
            >
              Confidentialité
            </Link>
            <Link href="/cgu" className="text-white/60 hover:text-white transition-colors text-xs">
              CGU
            </Link>
            <Link
              href="/support"
              className="text-white/60 hover:text-white transition-colors text-xs"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
