import pplLogo from "@/assets/ppl-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={pplLogo} alt="PPL Logo" className="h-10 w-10 object-contain" />
            <div>
              <h3 className="font-orbitron font-bold text-lg glow-text">PPL</h3>
              <p className="text-xs text-muted-foreground font-rajdhani">Premier Padel League</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-rajdhani mb-2">
              © 2025 Premier Padel League. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground font-rajdhani">
              Bringing world-class padel to Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
