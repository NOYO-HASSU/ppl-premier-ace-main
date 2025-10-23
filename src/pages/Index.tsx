import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClubBiddingSection from "@/components/ClubBiddingSection";
import PlayerBiddingSection from "@/components/PlayerBiddingSection";
import LeagueFormatSection from "@/components/LeagueFormatSection";
import CitiesSection from "@/components/CitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClubBiddingSection />
      <PlayerBiddingSection />
      <LeagueFormatSection />
      <CitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
