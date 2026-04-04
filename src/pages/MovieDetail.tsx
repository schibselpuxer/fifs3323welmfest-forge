import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, Calendar, Film, Users, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getMovieBySlug } from "@/data/movies";
import SeatSelection from "@/components/SeatSelection";
import MovieCastCrew from "@/components/MovieCastCrew";
import MovieSceneImages from "@/components/MovieSceneImages";
import CinemaHeader from "@/components/CinemaHeader";
import CinemaFooter from "@/components/CinemaFooter";

const MovieDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const movie = getMovieBySlug(slug || "");
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null);

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Film nicht gefunden</h1>
          <Link to="/" className="text-primary hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CinemaHeader />
      <main className="pt-20 pb-16">
        {/* Back link */}
        <div className="container mx-auto px-4 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zum Programm
          </Link>
        </div>

        {/* Hero section */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Poster */}
            <div className="w-full md:w-80 shrink-0">
              <div className="aspect-[2/3] rounded-xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <Badge className="bg-primary text-primary-foreground font-bold">
                  FSK {movie.fsk}
                </Badge>
                <Badge variant="secondary">{movie.genre}</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" />
                  {movie.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  {movie.rating} / 10
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  {movie.releaseDate}
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">{movie.description}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1.5">
                  <Film className="h-4 w-4 text-primary" />
                  Regie: {movie.director}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  {movie.cast.join(", ")}
                </span>
              </div>

              {/* Showtimes */}
              <div className="mb-2">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Vorstellungen heute
                </h2>
                <div className="flex flex-wrap gap-2">
                  {movie.showtimes.map((time) => (
                    <button
                      key={time}
                      onClick={() =>
                        setSelectedShowtime(selectedShowtime === time ? null : time)
                      }
                      className={`px-5 py-2.5 text-sm font-semibold rounded-lg border transition-colors ${
                        selectedShowtime === time
                          ? "gradient-gold text-primary-foreground border-transparent"
                          : "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {time} Uhr
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly showtime table */}
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            <span className="text-gradient-gold">Alle Spielzeiten</span>
          </h2>
          <div className="max-w-3xl rounded-xl border border-border bg-card overflow-x-auto">
            {(() => {
              const weekDays = ["Heute", "Sa 05.04.", "So 06.04.", "Mo 07.04.", "Di 08.04.", "Mi 09.04."];
              return (
                <table className="w-full min-w-[520px] text-sm">
                  <thead>
                    <tr>
                      {weekDays.map((day, i) => (
                        <th
                          key={day}
                          className={`p-3 text-center font-semibold border-b border-border ${
                            i === 0
                              ? "text-foreground bg-secondary/50"
                              : "text-muted-foreground bg-secondary/30 border-l"
                          }`}
                        >
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {movie.showtimes.map((time, idx) => (
                      <tr key={idx}>
                        {weekDays.map((day, dayIdx) => {
                          const available = (idx + dayIdx) % 4 !== 3;
                          return (
                            <td
                              key={day}
                              className={`p-2.5 text-center border-b border-border ${dayIdx > 0 ? "border-l" : ""}`}
                            >
                              {available ? (
                                <button
                                  onClick={() => setSelectedShowtime(selectedShowtime === time ? null : time)}
                                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                                    selectedShowtime === time && dayIdx === 0
                                      ? "gradient-gold text-primary-foreground"
                                      : "gradient-gold text-primary-foreground hover:opacity-90"
                                  }`}
                                >
                                  <Ticket className="h-3 w-3" />
                                  {time}
                                </button>
                              ) : (
                                <span className="text-muted-foreground/40">–</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            })()}
            <p className="text-[10px] text-muted-foreground italic text-right p-2">
              Für Tickets auf die Uhrzeit klicken.
            </p>
          </div>
        </div>

        {/* Trailer */}
        <div className="container mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            <span className="text-gradient-gold">Trailer</span>
          </h2>
          <div className="aspect-video max-w-3xl rounded-xl overflow-hidden border border-border bg-card">
            <iframe
              src={movie.trailerUrl}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Seat selection */}
        {selectedShowtime && (
          <div className="container mx-auto px-4 mt-12">
            <div className="max-w-3xl rounded-xl border border-border bg-card p-6 md:p-8">
              <SeatSelection showtime={selectedShowtime} />
            </div>
          </div>
        )}
      </main>
      <CinemaFooter />
    </div>
  );
};

export default MovieDetail;
