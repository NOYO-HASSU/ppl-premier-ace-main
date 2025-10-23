import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy } from "lucide-react";
import pplLogo from "@/assets/ppl-logo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <img 
            src={pplLogo} 
            alt="Premier Padel League Logo" 
            className="h-48 w-48 mx-auto mb-8 animate-float glow-card rounded-full"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 animate-fade-in glow-text">
          PREMIER PADEL LEAGUE
        </h1>
        
        <p className="text-xl md:text-2xl font-rajdhani font-medium mb-4 text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
          Pakistan's Elite Padel Championship
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-rajdhani font-semibold">3 Categories</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="font-rajdhani font-semibold">18 Clubs</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="font-rajdhani font-semibold">3 Cities</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg px-8 py-6 glow-border"
            onClick={scrollToContact}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 font-rajdhani font-bold text-lg px-8 py-6"
            onClick={() => document.querySelector("#format")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
