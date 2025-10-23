import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users } from "lucide-react";

const CitiesSection = () => {
  const cities = [
    {
      name: "Lahore",
      description: "The cultural capital hosts opening ceremonies and Alpha category finals",
      venues: "3 Premium Venues",
      capacity: "2000+ Spectators",
      icon: "🏛️",
    },
    {
      name: "Karachi",
      description: "Pakistan's largest city brings massive crowds and electric atmosphere",
      venues: "4 World-Class Courts",
      capacity: "2500+ Spectators",
      icon: "🏙️",
    },
    {
      name: "Islamabad/Rawalpindi",
      description: "Twin cities collaborate to host prestigious championship events",
      venues: "2 State-of-Art Facilities",
      capacity: "1800+ Spectators",
      icon: "⛰️",
    },
  ];

  return (
    <section id="cities" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-accent/5 to-transparent">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-4 gradient-text">
            Host Cities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            Three iconic Pakistani cities unite for the ultimate padel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-card animate-slide-in-left group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="text-6xl text-center mb-4 animate-float" style={{ animationDelay: `${index * 500}ms` }}>
                  {city.icon}
                </div>
                <CardTitle className="text-3xl font-orbitron font-black text-center mb-2 group-hover:glow-text transition-all">
                  {city.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-rajdhani text-center leading-relaxed">
                  {city.description}
                </p>
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-rajdhani font-semibold text-sm">{city.venues}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <span className="font-rajdhani font-semibold text-sm">{city.capacity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 animate-fade-in" style={{ animationDelay: "450ms" }}>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-full glow-border">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-orbitron font-bold mb-2 glow-text">
                  Season Schedule
                </h3>
                <p className="text-muted-foreground font-rajdhani text-lg">
                  Events rotate between cities throughout the season, ensuring every region experiences 
                  world-class padel action. Each city hosts multiple rounds with special championship events.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CitiesSection;
