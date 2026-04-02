import { Calendar, Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    title: "Sneak Preview",
    date: "Fr, 11. April 2025",
    time: "20:30 Uhr",
    description:
      "Erlebe einen brandneuen Film vor allen anderen – welcher es wird, bleibt bis zum Start geheim!",
    badge: "Wöchentlich",
    highlight: true,
  },
  {
    title: "Ladies Night: Romantik-Spezial",
    date: "Sa, 12. April 2025",
    time: "19:00 Uhr",
    description:
      "Ein Abend nur für euch: Sekt-Empfang, exklusiver Film und tolle Überraschungen.",
    badge: "Special",
    highlight: false,
  },
  {
    title: "Kinderkino am Sonntag",
    date: "So, 13. April 2025",
    time: "11:00 Uhr",
    description:
      "Familienfreundliche Vorstellung zum kleinen Preis – mit Mitmach-Aktion vor dem Film.",
    badge: "Familien",
    highlight: false,
  },
  {
    title: "Mondlicht-Open-Air-Kino",
    date: "Sa, 3. Mai 2025",
    time: "21:30 Uhr",
    description:
      "Kino unter freiem Himmel auf unserer Dachterrasse – mit Decken, Drinks und einem Klassiker.",
    badge: "Open Air",
    highlight: true,
  },
  {
    title: "Retro-Filmabend: 80er Kult",
    date: "Fr, 9. Mai 2025",
    time: "20:00 Uhr",
    description:
      "Zurück in die Zukunft, Ghostbusters oder Dirty Dancing? Stimme auf unserer Website ab!",
    badge: "Retro",
    highlight: false,
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

        <div className="grid gap-4 md:gap-6 max-w-3xl mx-auto">
          {events.map((event) => (
            <div
              key={event.title}
              className={`rounded-xl border p-5 md:p-6 transition-colors ${
                event.highlight
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card"
              } hover:border-primary/60`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                    {event.highlight && <Star className="h-4 w-4 text-primary fill-primary" />}
                    <Badge
                      variant="secondary"
                      className="text-[10px] uppercase tracking-wider"
                    >
                      {event.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 text-sm text-muted-foreground shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
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
