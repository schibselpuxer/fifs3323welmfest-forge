import { Link } from "react-router-dom";
import { Clock, Star, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MovieListItemProps {
  slug: string;
  title: string;
  poster: string;
  genre: string;
  duration: string;
  fsk: string;
  showtimes: string[];
  rating?: number;
  description: string;
  director: string;
  cast: string[];
}

const days = ["Heute", "Sa 05.04.", "So 06.04.", "Mo 07.04.", "Di 08.04.", "Mi 09.04."];

const MovieListItem = ({
  slug,
  title,
  poster,
  genre,
  duration,
  fsk,
  showtimes,
  rating,
  description,
  director,
  cast,
}: MovieListItemProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex flex-col md:flex-row gap-0">
        {/* Left: Poster + Info */}
        <div className="flex flex-col sm:flex-row gap-4 p-5 md:p-6 md:w-[480px] shrink-0">
          <Link to={`/film/${slug}`} className="shrink-0 w-[140px] sm:w-[160px]">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden group">
              <img
                src={poster}
                alt={title}
                loading="lazy"
                width={320}
                height={480}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold">
                FSK {fsk}
              </Badge>
            </div>
          </Link>

          <div className="flex-1 min-w-0">
            <Link to={`/film/${slug}`}>
              <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors mb-1">
                {title}
              </h3>
            </Link>
            <p className="text-xs text-muted-foreground italic mb-2">
              Regie: {director}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
              {description}
            </p>
            <div className="flex items-center flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {duration}
              </span>
              <span className="text-primary font-medium">{genre}</span>
              {rating && (
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-primary fill-primary" />
                  {rating}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Showtime grid */}
        <div className="flex-1 border-t md:border-t-0 md:border-l border-border overflow-x-auto">
          {/* Day headers */}
          <div className="grid grid-cols-7 min-w-[560px]">
            <div className="p-2 text-center text-xs font-semibold text-foreground bg-secondary/50 border-b border-border">
              Heute
            </div>
            {days.slice(1).map((day) => (
              <div
                key={day}
                className="p-2 text-center text-xs font-medium text-muted-foreground bg-secondary/30 border-b border-l border-border"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Showtime rows */}
          <div className="min-w-[560px]">
            {showtimes.map((time, idx) => (
              <div key={idx} className="grid grid-cols-7">
                {/* Today */}
                <div className="p-2 flex items-center justify-center border-b border-border">
                  <Link
                    to={`/film/${slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    {time}
                  </Link>
                </div>
                {/* Other days - show with ticket icon */}
                {days.slice(1).map((day, dayIdx) => (
                  <div
                    key={day}
                    className="p-2 flex items-center justify-center border-b border-l border-border"
                  >
                    {/* Simulate some variation */}
                    {(idx + dayIdx) % 4 !== 3 ? (
                      <Link
                        to={`/film/${slug}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        <Ticket className="h-3 w-3" />
                        {time}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground/40 text-xs">–</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="text-[10px] text-muted-foreground italic text-right p-2 min-w-[560px]">
            Für Tickets auf die Uhrzeit klicken.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
