import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import BetaSignup from "@/components/BetaSignup";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
        <HeroSection />
        <FeaturesSection />
        <BetaSignup />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
