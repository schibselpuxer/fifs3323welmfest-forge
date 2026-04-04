import CinemaHeader from "@/components/CinemaHeader";
import CinemaFooter from "@/components/CinemaFooter";
import { MapPin, Phone, Mail, Clock, Film, Users, Star, Projector } from "lucide-react";
import aboutCinema from "@/assets/about-cinema.jpg";
import aboutLobby from "@/assets/about-lobby.jpg";
import aboutTechnik from "@/assets/about-technik.jpg";

const stats = [
  { icon: Film, value: "6", label: "Kinosäle" },
  { icon: Users, value: "1.200", label: "Sitzplätze" },
  { icon: Star, value: "25+", label: "Jahre Erfahrung" },
  { icon: Projector, value: "4K", label: "Laser-Projektion" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <CinemaHeader />
      <main>
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] flex items-end">
          <img
            src={aboutCinema}
            alt="Filmpalast Kinosaal"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative container mx-auto px-4 pb-10">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-2">
              Über <span className="text-gradient-gold">uns</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Seit über 25 Jahren dein Kino für unvergessliche Filmerlebnisse in Filmstadt.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full gradient-gold flex items-center justify-center">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p className="text-3xl font-black text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Geschichte */}
        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4">
                Unsere <span className="text-gradient-gold">Geschichte</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Der Filmpalast wurde im Jahr 2000 als kleines Programmkino mit zwei Sälen gegründet.
                Was als Herzensprojekt zweier Filmliebhaber begann, hat sich über die Jahre zu einem
                modernen Multiplex-Kino mit sechs Sälen und insgesamt 1.200 Sitzplätzen entwickelt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unser Anspruch ist es, jedem Gast ein besonderes Kinoerlebnis zu bieten – mit
                erstklassiger Bild- und Tonqualität, bequemen Sesseln und einem vielfältigen Programm
                von Hollywood-Blockbustern bis hin zu Arthouse-Perlen und Sondervorstellungen.
              </p>
            </div>
            <img
              src={aboutLobby}
              alt="Filmpalast Lobby"
              className="rounded-lg border border-border object-cover w-full h-80"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </section>

        {/* Technik */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <img
              src={aboutTechnik}
              alt="Kino-Technik"
              className="rounded-lg border border-border object-cover w-full h-80 md:order-first"
              loading="lazy"
              width={800}
              height={600}
            />
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4">
                Modernste <span className="text-gradient-gold">Technik</span>
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">4K Laser-Projektion</strong> – Kristallklare Bilder mit lebendigen Farben in allen Sälen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Dolby Atmos</strong> – Immersiver 3D-Sound, der dich mitten ins Geschehen versetzt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Premium-Sitze</strong> – Ergonomische Ledersessel mit extra Beinfreiheit und Getränkehalter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Barrierefreiheit</strong> – Alle Säle sind barrierefrei zugänglich mit Induktionsschleifen.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kontakt & Anfahrt */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black text-foreground text-center mb-10">
              Kontakt & <span className="text-gradient-gold">Anfahrt</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Adresse", text: "Kinostraße 12, 12345 Filmstadt" },
                  { icon: Phone, label: "Kartenreservierung", text: "0800 123 4567" },
                  { icon: Mail, label: "E-Mail", text: "info@filmpalast.de" },
                  { icon: Clock, label: "Kassenöffnung", text: "Täglich ab 30 Min. vor der ersten Vorstellung" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border overflow-hidden h-80">
                <iframe
                  title="Anfahrt zum Filmpalast"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=13.37%2C52.51%2C13.39%2C52.52&layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <CinemaFooter />
    </div>
  );
};

export default AboutUs;
