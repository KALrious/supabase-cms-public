import GetStarted from "@/landing/get-started";
import HeroSection from "@/landing/hero-section";
import InfoSection from "@/landing/info-section";
import MarketingSection from "@/landing/marketing-section";
import Footer from "@/organisms/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-white from-50% to-gray-100 ">
      <HeroSection />
      <InfoSection />
      <MarketingSection />
      <GetStarted />
      <Footer />
    </div>
  );
}
