import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  slug: string;
  title: string;
  poster: string;
  genre: string;
  duration: string;
  fsk: string;
  showtimes: string[];
  rating?: number;
}

const MovieCard = ({ slug, title, poster, genre, duration, fsk, showtimes, rating }: MovieCardProps) => {
  return (
    <Link
      to={`/film/${slug}`}
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(38,80%,55%,0.3)] block"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={poster}
          alt={title}
          loading="lazy"
          width={640}
          height={960}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold">
          FSK {fsk}
        </Badge>
        {rating && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground">{rating}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-primary font-medium mb-1">{genre}</p>
        <h3 className="font-bold text-foreground text-sm leading-tight mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
          <Clock className="h-3 w-3" />
          <span>{duration}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {showtimes.map((time) => (
            <span
              key={time}
              className="px-3 py-1.5 text-xs font-semibold rounded border border-primary/40 text-primary"
            >
              {time}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
