import { useState } from "react";
import MovieCard from "./MovieCard";
import poster1 from "@/assets/movie-poster-1.jpg";
import poster2 from "@/assets/movie-poster-2.jpg";
import poster3 from "@/assets/movie-poster-3.jpg";
import poster4 from "@/assets/movie-poster-4.jpg";
import poster5 from "@/assets/movie-poster-5.jpg";
import poster6 from "@/assets/movie-poster-6.jpg";

const movies = [
  {
    title: "Der Astronaut – Project Hail Mary",
    poster: poster1,
    genre: "Science-Fiction",
    duration: "138 Min.",
    fsk: "12",
    showtimes: ["14:30", "17:15", "20:00"],
    rating: 8.4,
  },
  {
    title: "Schatten der Nacht",
    poster: poster2,
    genre: "Thriller",
    duration: "121 Min.",
    fsk: "16",
    showtimes: ["18:00", "20:45", "23:00"],
    rating: 7.8,
  },
  {
    title: "Waldabenteuer",
    poster: poster3,
    genre: "Familienkino",
    duration: "96 Min.",
    fsk: "0",
    showtimes: ["11:30", "13:45", "16:00"],
    rating: 7.2,
  },
  {
    title: "Drachenzorn – Die Schlacht",
    poster: poster4,
    genre: "Fantasy / Abenteuer",
    duration: "156 Min.",
    fsk: "12",
    showtimes: ["15:00", "18:30", "21:30"],
    rating: 8.1,
  },
  {
    title: "Sommernächte in der Stadt",
    poster: poster5,
    genre: "Romantik / Komödie",
    duration: "108 Min.",
    fsk: "6",
    showtimes: ["16:30", "19:00", "21:15"],
    rating: 6.9,
  },
  {
    title: "Das Haus am Ende der Straße",
    poster: poster6,
    genre: "Horror",
    duration: "112 Min.",
    fsk: "18",
    showtimes: ["20:30", "23:00"],
    rating: 7.5,
  },
];

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
            <MovieCard key={movie.title} {...movie} />
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
