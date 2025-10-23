import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

const LeagueFormatSection = () => {
  const categories = [
    {
      name: "Alpha",
      letter: "A",
      icon: Trophy,
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/50",
      textColor: "text-yellow-500",
      description: "Elite Category - Top 6 clubs compete for the ultimate championship title",
      clubs: 6,
      level: "Elite",
    },
    {
      name: "Beta",
      letter: "B",
      icon: Medal,
      color: "from-primary/20 to-primary/10",
      borderColor: "border-primary/50",
      textColor: "text-primary",
      description: "Premier Category - High-level competitive play for championship contenders",
      clubs: 6,
      level: "Premier",
    },
    {
      name: "Charlie",
      letter: "C",
      icon: Award,
      color: "from-accent/20 to-accent/10",
      borderColor: "border-accent/50",
      textColor: "text-accent",
      description: "Competitive Category - Emerging clubs building towards greatness",
      clubs: 6,
      level: "Competitive",
    },
  ];

  return (
    <section id="format" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-4 gradient-text">
            League Format
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            Three competitive categories, 18 clubs, one ultimate champion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card
              key={category.name}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border-2 ${category.borderColor} hover:glow-card transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className={`mx-auto mb-4 p-4 bg-background/50 rounded-full w-20 h-20 flex items-center justify-center glow-border`}>
                  <category.icon className={`h-10 w-10 ${category.textColor}`} />
                </div>
                <CardTitle className="text-3xl font-orbitron font-black mb-2">
                  <span className={category.textColor}>{category.letter}</span>
                  <span className="text-foreground ml-2">- {category.name}</span>
                </CardTitle>
                <p className={`text-sm font-rajdhani font-bold ${category.textColor}`}>
                  {category.level}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-rajdhani text-center leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className={`text-3xl font-orbitron font-black ${category.textColor}`}>
                      {category.clubs}
                    </div>
                    <p className="text-xs text-muted-foreground font-rajdhani">Clubs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/30 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <CardContent className="p-8">
            <h3 className="text-3xl font-orbitron font-bold mb-6 text-center glow-text">
              Competition Structure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="min-w-[8px] h-8 bg-primary rounded-full mt-1" />
                  <p className="font-rajdhani text-lg text-muted-foreground">
                    <span className="text-foreground font-bold">Round Robin:</span> All clubs within each category play each other
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-[8px] h-8 bg-accent rounded-full mt-1" />
                  <p className="font-rajdhani text-lg text-muted-foreground">
                    <span className="text-foreground font-bold">Playoffs:</span> Top 4 teams from each category advance
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="min-w-[8px] h-8 bg-secondary rounded-full mt-1" />
                  <p className="font-rajdhani text-lg text-muted-foreground">
                    <span className="text-foreground font-bold">Finals:</span> Best-of-3 championship matches
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-[8px] h-8 bg-primary rounded-full mt-1" />
                  <p className="font-rajdhani text-lg text-muted-foreground">
                    <span className="text-foreground font-bold">Promotion:</span> Top Charlie teams can advance to Beta
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeagueFormatSection;
