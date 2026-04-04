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
      <div className="max-w-3xl space-y-6">
        {/* Cast with portraits */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            <Users className="h-4 w-4 text-primary" />
            Besetzung
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {movie.cast.map((actor) => (
              <div key={actor.name} className="flex flex-col items-center text-center gap-2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
                  <img
                    src={actor.portrait}
                    alt={actor.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold leading-tight">{actor.name}</p>
                  {actor.role && (
                    <p className="text-muted-foreground text-xs mt-0.5">{actor.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crew */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            <Film className="h-4 w-4 text-primary" />
            Crew
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {movie.crew.map((member) => (
              <div key={member.name} className="text-sm">
                <span className="text-muted-foreground">{member.role}:</span>{" "}
                <span className="text-foreground/90 font-medium">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCastCrew;
