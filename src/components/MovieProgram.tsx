import { useState } from "react";
import MovieCard from "./MovieCard";
import { movies } from "@/data/movies";

const days = ["Heute", "Do, 3.4.", "Fr, 4.4.", "Sa, 5.4.", "So, 6.4."];

const MovieProgram = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="programm" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              Aktuelles <span className="text-gradient-gold">Programm</span>
            </h2>
            <p className="text-muted-foreground mt-2">Finde deinen nächsten Lieblingsfilm</p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {days.map((day, i) => (
              <button
                key={day}
                onClick={() => setActiveDay(i)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  i === activeDay
                    ? "gradient-gold text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.slug} {...movie} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#programm"
            className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Gesamtes Programm anzeigen
          </a>
        </div>
      </div>
    </section>
  );
};

export default MovieProgram;
