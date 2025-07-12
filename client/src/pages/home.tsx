import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ScreenshotsSection from "@/components/screenshots-section";
import DownloadSection from "@/components/download-section";
import { SEO } from "@/components/seo";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <StructuredData type="Organization" />
      <StructuredData type="WebApplication" />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
