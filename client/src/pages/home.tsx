import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ScreenshotsSection from "@/components/screenshots-section";
import DownloadSection from "@/components/download-section";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO twitterSite="@chessmeet_app" />
      <StructuredData type="Organization" />
      <StructuredData type="WebApplication" />
      <StructuredData type="WebSite" />
      <StructuredData type="FAQPage" />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <DownloadSection />
        {/* FAQ visible pour aligner avec le JSON-LD */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl xs:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Comment fonctionne ChessMeet ?</h3>
                  <p className="text-foreground/80">
                    ChessMeet connecte les joueurs d'échecs pour organiser des parties près de chez vous, découvrir des événements et rencontrer la communauté locale.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">L'application est-elle gratuite ?</h3>
                  <p className="text-foreground/80">
                    Oui, ChessMeet est entièrement gratuite.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Sur quelles plateformes l'app est disponible ?</h3>
                  <p className="text-foreground/80">
                    L'application sera disponible sur iOS (App Store) et Android (Google Play Store).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
