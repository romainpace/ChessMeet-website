import { motion } from "framer-motion";
import chessKnightTransparent from "@assets/chess_knight_transparent.png";
import chessKnightLogo from "@assets/chess-knight-logo.png";
import screenshotOnboarding from "@assets/capture-onboarding.jpg";

export default function HeroSection() {
  return (
    <section className="bg-background pt-20 xs:pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <div className="mb-4">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight flex items-center justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4">
                  <img
                    src={chessKnightLogo}
                    alt="Logo ChessMeet - Cavalier d'échecs"
                    className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                    width="96"
                    height="96"
                  />
                  <span className="text-foreground" style={{ fontFamily: "serif" }}>
                    ChessMeet
                  </span>
                </h1>
              </div>
              <h2 className="text-lg xs:text-xl lg:text-2xl font-bold text-amber-800 leading-tight">
                Passez de l'écran à l'échiquier
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-base xs:text-lg lg:text-xl text-foreground font-medium leading-relaxed">
                <span className="text-foreground">ChessMeet connecte les </span>
                <span className="text-amber-800 font-bold">joueurs d'échecs</span>
                <span className="text-foreground"> pour des </span>
                <span className="text-amber-800 font-bold">parties en vrai</span>
                <span className="text-foreground">, près de chez vous !</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* App Store Button */}
              <div className="relative">
                <a
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-4 xs:px-6 py-3 rounded-xl font-normal text-sm xs:text-base h-auto transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-800"
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 xs:w-8 xs:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-base xs:text-lg font-semibold leading-tight mt-1">App Store</div>
                    </div>
                  </div>
                </a>
                {/* Badge "Bientôt" */}
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] xs:text-xs font-bold px-2 xs:px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Bientôt
                </div>
              </div>

              {/* Google Play Button */}
              <div className="relative">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-4 xs:px-6 py-3 rounded-xl font-normal text-sm xs:text-base h-auto transition-all duration-300 w-full sm:w-auto sm:min-w-[200px] shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-800"
                >
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 xs:w-8 xs:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-base xs:text-lg font-semibold leading-tight mt-1">Google Play</div>
                    </div>
                  </div>
                </a>
                {/* Badge "Bientôt" */}
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] xs:text-xs font-bold px-2 xs:px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Bientôt
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            {/* iPhone Frame with App Screenshot */}
            <div className="relative mx-auto w-64 h-[512px] xs:w-72 xs:h-[576px] sm:w-80 sm:h-[640px] bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] xs:rounded-[3rem] p-2 xs:p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* iPhone Screen */}
              <div className="w-full h-full bg-black rounded-[2rem] xs:rounded-[2.5rem] overflow-hidden relative">
                {/* App Screenshot */}
                <img
                  src={screenshotOnboarding}
                  alt="Interface de l'application ChessMeet montrant l'écran d'accueil avec les options de connexion"
                  className="w-full h-full object-cover rounded-[1.8rem] xs:rounded-[2.3rem]"
                  loading="eager"
                />

                {/* Screen Overlay for Realism */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none rounded-[1.8rem] xs:rounded-[2.3rem]"></div>
              </div>

              {/* Side Buttons */}
              <div className="absolute left-[-3px] top-20 w-1 h-10 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute left-[-3px] top-36 w-1 h-14 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute left-[-3px] top-56 w-1 h-14 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute right-[-3px] top-24 w-1 h-20 bg-gray-700 rounded-r-sm"></div>

              {/* Home Indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
