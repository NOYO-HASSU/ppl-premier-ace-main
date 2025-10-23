import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, FileText, Clock, CheckCircle2 } from "lucide-react";

const ClubBiddingSection = () => {
  const rules = [
    {
      icon: Building2,
      title: "Club Registration",
      description: "All participating clubs must register before the bidding deadline with valid documentation.",
    },
    {
      icon: FileText,
      title: "Bidding Process",
      description: "Clubs submit sealed bids for their preferred category. Highest bids secure spots in Alpha category.",
    },
    {
      icon: Clock,
      title: "Timeline",
      description: "Bidding opens 60 days before league start and closes 30 days prior. Winners announced within 48 hours.",
    },
    {
      icon: CheckCircle2,
      title: "Category Assignment",
      description: "Top 6 bids get Alpha, next 6 get Beta, and final 6 get Charlie category placement.",
    },
  ];

  return (
    <section id="club-bidding" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-4 gradient-text">
            Club Bidding Rules
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            How clubs secure their place in Pakistan's premier padel competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, index) => (
            <Card
              key={rule.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 glow-border animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg glow-border">
                    <rule.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-orbitron">{rule.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                  {rule.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-center glow-text">
              Important Note
            </h3>
            <p className="text-center text-muted-foreground font-rajdhani text-lg">
              All clubs must comply with PPL regulations and maintain fair play standards throughout the bidding process. 
              Any violation may result in disqualification and forfeiture of registration fees.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClubBiddingSection;
