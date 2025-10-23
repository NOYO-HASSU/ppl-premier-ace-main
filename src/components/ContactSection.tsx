import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-rajdhani">
            Have questions? Want to participate? We're here to help!
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/30 glow-card animate-fade-in" style={{ animationDelay: "200ms" }}>
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg glow-border group-hover:animate-glow-pulse">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold mb-2 text-lg">Email Us</h3>
                    <a 
                      href="mailto:info@ppl.com.pk" 
                      className="text-primary hover:text-primary/80 transition-colors font-rajdhani text-lg"
                    >
                      info@ppl.com.pk
                    </a>
                    <p className="text-sm text-muted-foreground font-rajdhani mt-1">
                      General inquiries and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-accent/10 rounded-lg glow-border group-hover:animate-glow-pulse">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold mb-2 text-lg">Call Us</h3>
                    <a 
                      href="tel:+92-300-1234567" 
                      className="text-accent hover:text-accent/80 transition-colors font-rajdhani text-lg"
                    >
                      +92-300-1234567
                    </a>
                    <p className="text-sm text-muted-foreground font-rajdhani mt-1">
                      Mon-Fri, 9:00 AM - 6:00 PM PKT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-secondary/10 rounded-lg glow-border group-hover:animate-glow-pulse">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold mb-2 text-lg">Headquarters</h3>
                    <p className="text-muted-foreground font-rajdhani">
                      PPL Sports Complex<br />
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-orbitron font-bold mb-3 text-xl glow-text">Quick Links</h3>
                    <div className="space-y-2 font-rajdhani">
                      <p className="text-muted-foreground">📋 Club Registration Portal</p>
                      <p className="text-muted-foreground">👥 Player Database</p>
                      <p className="text-muted-foreground">📅 Event Calendar</p>
                      <p className="text-muted-foreground">📊 League Standings</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30">
                  <CardContent className="p-6">
                    <h3 className="font-orbitron font-bold mb-3 text-xl text-accent">Media Inquiries</h3>
                    <p className="text-muted-foreground font-rajdhani mb-3">
                      For press releases and media partnerships
                    </p>
                    <a 
                      href="mailto:media@ppl.com.pk" 
                      className="text-accent hover:text-accent/80 transition-colors font-rajdhani"
                    >
                      media@ppl.com.pk
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-border/50">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-rajdhani font-bold text-lg px-8 py-6 glow-border"
                onClick={() => window.location.href = "mailto:info@ppl.com.pk"}
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-muted-foreground font-rajdhani text-lg mb-4">
            Follow us for the latest updates and announcements
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-rajdhani font-semibold">
              Facebook
            </div>
            <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-rajdhani font-semibold">
              Instagram
            </div>
            <div className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full font-rajdhani font-semibold">
              Twitter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
