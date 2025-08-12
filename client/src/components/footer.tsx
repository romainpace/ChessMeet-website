import { Link } from "wouter";
import chessKnightLogo from "@assets/chess-knight-logo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-center sm:text-left">
          <div className="flex items-center space-x-2 justify-center sm:justify-start">
            <img
              src={chessKnightLogo}
              alt="ChessMeet Logo"
              className="h-6 w-6 xs:h-8 xs:w-8 brightness-0 invert"
            />
            <span className="text-lg xs:text-xl font-bold" style={{ fontFamily: "serif" }}>
              ChessMeet
            </span>
          </div>

          <div className="text-center order-3 sm:order-2">
            <p className="text-white/60 text-[10px] xs:text-xs">© 2025 ChessMeet. Tous droits réservés.</p>
            <div className="mt-2 space-x-3">
              <Link href="/a-propos" className="text-white/50 hover:text-white text-[10px] xs:text-xs">
                À propos
              </Link>
              <span className="text-white/40">·</span>
              <Link href="/mentions-legales" className="text-white/50 hover:text-white text-[10px] xs:text-xs">
                Mentions légales
              </Link>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end space-x-3 xs:space-x-4 order-2 sm:order-3">
            <Link
              href="/confidentialite"
              className="text-white/60 hover:text-white transition-colors text-[11px] xs:text-xs"
            >
              Confidentialité
            </Link>
            <Link href="/cgu" className="text-white/60 hover:text-white transition-colors text-xs">
              CGU
            </Link>
            <Link
              href="/support"
              className="text-white/60 hover:text-white transition-colors text-[11px] xs:text-xs"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
