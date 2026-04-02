import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import cinemaLogo from "@/assets/cinema-logo.png";

const navItems = [
  { label: "Programm", href: "#programm" },
  { label: "Aktuell", href: "#aktuell" },
  { label: "Gutscheine", href: "#gutscheine" },
  { label: "Events", href: "#events" },
  { label: "Über uns", href: "#ueber-uns" },
];

const CinemaHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-3">
          <img src={cinemaLogo} alt="Filmpalast Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-gradient-gold tracking-wide">FILMPALAST</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 text-foreground/70 hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden md:flex p-2 text-foreground/70 hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button
            className="md:hidden p-2 text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden glass-dark border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default CinemaHeader;
