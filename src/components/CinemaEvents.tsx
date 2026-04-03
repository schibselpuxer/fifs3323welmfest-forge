import { Calendar, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import eventSneak from "@/assets/event-sneak.jpg";
import eventLadies from "@/assets/event-ladies.jpg";
import eventKids from "@/assets/event-kids.jpg";
import eventOpenair from "@/assets/event-openair.jpg";
import eventRetro from "@/assets/event-retro.jpg";

const events = [
  {
    title: "Sneak Preview",
    date: "Fr, 11. April 2025",
    time: "20:30 Uhr",
    description:
      "Erlebe einen brandneuen Film vor allen anderen – welcher es wird, bleibt bis zum Start geheim!",
    badge: "Wöchentlich",
    highlight: true,
    image: eventSneak,
  },
  {
    title: "Ladies Night: Romantik-Spezial",
    date: "Sa, 12. April 2025",
    time: "19:00 Uhr",
    description:
      "Ein Abend nur für euch: Sekt-Empfang, exklusiver Film und tolle Überraschungen.",
    badge: "Special",
    highlight: false,
    image: eventLadies,
  },
  {
    title: "Kinderkino am Sonntag",
    date: "So, 13. April 2025",
    time: "11:00 Uhr",
    description:
      "Familienfreundliche Vorstellung zum kleinen Preis – mit Mitmach-Aktion vor dem Film.",
    badge: "Familien",
    highlight: false,
    image: eventKids,
  },
  {
    title: "Mondlicht-Open-Air-Kino",
    date: "Sa, 3. Mai 2025",
    time: "21:30 Uhr",
    description:
      "Kino unter freiem Himmel auf unserer Dachterrasse – mit Decken, Drinks und einem Klassiker.",
    badge: "Open Air",
    highlight: true,
    image: eventOpenair,
  },
  {
    title: "Retro-Filmabend: 80er Kult",
    date: "Fr, 9. Mai 2025",
    time: "20:00 Uhr",
    description:
      "Zurück in die Zukunft, Ghostbusters oder Dirty Dancing? Stimme auf unserer Website ab!",
    badge: "Retro",
    highlight: false,
    image: eventRetro,
  },
];

const CinemaEvents = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Events & <span className="text-gradient-gold">Sondervorstellungen</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Mehr als nur Kino – entdecke unsere besonderen Veranstaltungen und Highlights.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className="group relative rounded-xl overflow-hidden h-[220px] md:h-[280px] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                width={1280}
                height={512}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

              {/* Highlight border glow */}
              {event.highlight && (
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/30" />
              )}

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-10 max-w-2xl">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge
                    variant="secondary"
                    className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary border-primary/30"
                  >
                    {event.badge}
                  </Badge>
                  {event.highlight && <Star className="h-4 w-4 text-primary fill-primary" />}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {event.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CinemaEvents;
