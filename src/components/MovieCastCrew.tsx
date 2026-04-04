import { Film, Users } from "lucide-react";
import type { Movie } from "@/data/movies";

interface MovieCastCrewProps {
  movie: Movie;
}

const MovieCastCrew = ({ movie }: MovieCastCrewProps) => {
  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        <span className="text-gradient-gold">Cast & Crew</span>
      </h2>
      <div className="max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Cast */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            <Users className="h-4 w-4 text-primary" />
            Besetzung
          </h3>
          <ul className="space-y-2">
            {movie.cast.map((actor) => (
              <li key={actor} className="text-foreground/90 text-sm font-medium">
                {actor}
              </li>
            ))}
          </ul>
        </div>

        {/* Crew */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            <Film className="h-4 w-4 text-primary" />
            Crew
          </h3>
          <ul className="space-y-2">
            {movie.crew.map((member) => (
              <li key={member.name} className="text-sm">
                <span className="text-muted-foreground">{member.role}:</span>{" "}
                <span className="text-foreground/90 font-medium">{member.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCastCrew;
