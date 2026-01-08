import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BetaSignup from "@/components/BetaSignup";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen-ios safe-top safe-bottom">
      <Header />
      <main className="container mx-auto px-4 safe-left safe-right">
        <HeroSection />
        <FeaturesSection />
        <BetaSignup />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
