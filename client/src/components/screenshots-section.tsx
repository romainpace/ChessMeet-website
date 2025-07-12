import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  captureAccueil,
  captureMap,
  captureDetailEvent,
  captureChat,
  captureAmis,
  captureAccueilWebp,
  captureMapWebp,
  captureDetailEventWebp,
  captureChatWebp,
  captureAmisWebp,
  captureAccueilOptimized,
  captureMapOptimized,
  captureDetailEventOptimized,
  captureChatOptimized,
  captureAmisOptimized
} from "@/assets/images";

const screenshots = [
  {
    jpg: captureAccueil,
    webp: captureAccueilWebp,
    optimized: captureAccueilOptimized,
    title: "Découvre les parties et tournois à venir dans ta ville",
  },
  {
    jpg: captureMap,
    webp: captureMapWebp,
    optimized: captureMapOptimized,
    title: "Visualise tous les spots d'échecs autour de toi",
  },
  {
    jpg: captureDetailEvent,
    webp: captureDetailEventWebp,
    optimized: captureDetailEventOptimized,
    title: "Rejoins des parties en un clic et rencontre de nouveaux adversaires",
  },
  {
    jpg: captureChat,
    webp: captureChatWebp,
    optimized: captureChatOptimized,
    title: "Discute stratégie et organise tes parties avec la communauté",
  },
  {
    jpg: captureAmis,
    webp: captureAmisWebp,
    optimized: captureAmisOptimized,
    title: "Construis ton cercle d'échecs et défie tes amis",
  },
];

export default function ScreenshotsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentSlide === screenshots.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentSlide === 0) {
      setCurrentSlide(screenshots.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }

    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="py-16 lg:py-24 bg-[#F8F2E8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Découvrez ChessMeet en images
          </h2>
          <p className="text-xl text-foreground/80">
            L'application qui réunit les passionnés d'échecs près de chez vous
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="w-full flex-shrink-0 flex justify-center">
                  <div className="w-80">
                    {/* Modern Phone Frame */}
                    <div className="relative mx-auto w-72 h-[580px] bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-2 shadow-2xl">
                      {/* Phone Screen */}
                      <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
                        {/* Screenshot Image */}
                        <picture>
                          <source srcSet={screenshot.webp} type="image/webp" />
                          <source srcSet={screenshot.optimized} type="image/jpeg" />
                          <img
                            src={screenshot.jpg}
                            alt={screenshot.title}
                            className="w-full h-full object-cover object-center rounded-[1.8rem]"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </picture>

                        {/* Subtle Glass Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/3 pointer-events-none rounded-[1.8rem]"></div>
                      </div>

                      {/* Minimal Side Details */}
                      <div className="absolute left-[-1px] top-20 w-0.5 h-12 bg-gray-700 rounded-l-sm"></div>
                      <div className="absolute left-[-1px] top-36 w-0.5 h-16 bg-gray-700 rounded-l-sm"></div>
                      <div className="absolute right-[-1px] top-24 w-0.5 h-20 bg-gray-700 rounded-r-sm"></div>
                    </div>

                    <p className="text-center text-foreground mt-6 font-medium">
                      {screenshot.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Améliorées */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-200 disabled:opacity-50"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-gray-200 disabled:opacity-50"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Dots - Améliorés avec meilleur contraste */}
          <div className="flex justify-center mt-8 space-x-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full w-3 h-3 ${
                  index === currentSlide
                    ? "bg-primary shadow-md scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
