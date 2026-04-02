import { MapPin, Phone, Clock, Gift } from "lucide-react";

const infoItems = [
  {
    icon: MapPin,
    title: "Adresse",
    text: "Kinostraße 12, 12345 Filmstadt",
  },
  {
    icon: Phone,
    title: "Kartenreservierung",
    text: "0800 123 4567",
  },
  {
    icon: Clock,
    title: "Kassenöffnung",
    text: "Täglich ab 30 Min. vor der ersten Vorstellung",
  },
  {
    icon: Gift,
    title: "Gutscheine",
    text: "Das perfekte Geschenk für Filmfans",
  },
];

const CinemaInfo = () => {
  return (
    <section id="ueber-uns" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-foreground text-center mb-12">
          Dein <span className="text-gradient-gold">Filmpalast</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinemaInfo;
