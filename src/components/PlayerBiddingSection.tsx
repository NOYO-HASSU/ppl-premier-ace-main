import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const PlayerBiddingSection = () => {
  const instructions = [
    {
      icon: Users,
      title: "Player Pool",
      description: "All registered players enter a centralized pool. Players are categorized by skill level and experience.",
      highlight: "Open Registration",
    },
    {
      icon: Target,
      title: "Auction Format",
      description: "Clubs bid on players in real-time auction. Each club has a fixed budget to build their squad.",
      highlight: "Live Bidding",
    },
    {
      icon: Award,
      title: "Squad Building",
      description: "Clubs must maintain roster size limits. Minimum and maximum player requirements per category.",
      highlight: "Strategic Planning",
    },
    {
      icon: TrendingUp,
      title: "Price Caps",
      description: "Base price and maximum bid limits apply. Salary cap ensures competitive balance across all clubs.",
      highlight: "Fair Competition",
    },
  ];

  return (
    <section id="player-bidding" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-4 gradient-text">
            Player Bidding Instructions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            How clubs draft their championship-winning squads
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {instructions.map((instruction, index) => (
            <Card
              key={instruction.title}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-card animate-slide-in-left group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg glow-border group-hover:animate-glow-pulse">
                    <instruction.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-orbitron">{instruction.title}</CardTitle>
                      <span className="text-xs font-rajdhani font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {instruction.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                  {instruction.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-orbitron font-black text-primary mb-2">8-12</div>
              <p className="font-rajdhani text-muted-foreground">Players per Squad</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-orbitron font-black text-accent mb-2">3</div>
              <p className="font-rajdhani text-muted-foreground">Rounds of Bidding</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30 text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-orbitron font-black text-secondary mb-2">100%</div>
              <p className="font-rajdhani text-muted-foreground">Transparent Process</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlayerBiddingSection;
