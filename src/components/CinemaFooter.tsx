import cinemaLogo from "@/assets/cinema-logo.png";

const CinemaFooter = () => {
  return (
    <footer className="bg-cinema-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={cinemaLogo} alt="Filmpalast" className="h-8 w-8" />
              <span className="font-bold text-gradient-gold text-lg">FILMPALAST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Dein Kino für besondere Filmerlebnisse. Modernste Technik, bester Sound und maximaler Komfort.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Programm</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Aktuelles Programm</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vorschau</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sondervorstellungen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Familienkino</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Gutscheine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kindergeburtstag</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gastronomie</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vermietung</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kinostraße 12</li>
              <li>12345 Filmstadt</li>
              <li>Tel: 0800 123 4567</li>
              <li><a href="#" className="hover:text-primary transition-colors">info@filmpalast.de</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2026 Filmpalast. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CinemaFooter;
