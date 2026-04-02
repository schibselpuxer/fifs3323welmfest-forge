import poster1 from "@/assets/movie-poster-1.jpg";
import poster2 from "@/assets/movie-poster-2.jpg";
import poster3 from "@/assets/movie-poster-3.jpg";
import poster4 from "@/assets/movie-poster-4.jpg";
import poster5 from "@/assets/movie-poster-5.jpg";
import poster6 from "@/assets/movie-poster-6.jpg";

export interface Movie {
  slug: string;
  title: string;
  poster: string;
  genre: string;
  duration: string;
  fsk: string;
  showtimes: string[];
  rating: number;
  description: string;
  trailerUrl: string;
  director: string;
  cast: string[];
  releaseDate: string;
}

export const movies: Movie[] = [
  {
    slug: "der-astronaut",
    title: "Der Astronaut – Project Hail Mary",
    poster: poster1,
    genre: "Science-Fiction",
    duration: "138 Min.",
    fsk: "12",
    showtimes: ["14:30", "17:15", "20:00"],
    rating: 8.4,
    description:
      "Ein Astronaut wacht allein auf einem Raumschiff auf – ohne Erinnerung an seine Mission. Während er Stück für Stück die Wahrheit aufdeckt, wird klar: Er ist die letzte Hoffnung der Menschheit. Ein mitreißendes Abenteuer voller Wissenschaft, Humor und Herz.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    director: "Phil Lord",
    cast: ["Ryan Gosling", "Sandra Bullock", "Ke Huy Quan"],
    releaseDate: "27. März 2025",
  },
  {
    slug: "schatten-der-nacht",
    title: "Schatten der Nacht",
    poster: poster2,
    genre: "Thriller",
    duration: "121 Min.",
    fsk: "16",
    showtimes: ["18:00", "20:45", "23:00"],
    rating: 7.8,
    description:
      "Kommissarin Laura Brandt jagt einen Serienkiller, der seine Taten nach einem scheinbar zufälligen Muster begeht. Doch als sie das Muster entschlüsselt, wird sie selbst zur Zielscheibe. Ein nervenaufreibender Thriller, der bis zur letzten Minute fesselt.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    director: "Thomas Vinterberg",
    cast: ["Nina Hoss", "Lars Eidinger", "Jella Haase"],
    releaseDate: "3. April 2025",
  },
  {
    slug: "waldabenteuer",
    title: "Waldabenteuer",
    poster: poster3,
    genre: "Familienkino",
    duration: "96 Min.",
    fsk: "0",
    showtimes: ["11:30", "13:45", "16:00"],
    rating: 7.2,
    description:
      "Die kleine Mia entdeckt im Wald hinter ihrem Haus eine verborgene Welt voller sprechender Tiere und magischer Pflanzen. Gemeinsam mit ihrem Fuchs-Freund Felix muss sie den Wald vor einer mysteriösen Bedrohung retten.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    director: "Caroline Link",
    cast: ["Stimmen: Anke Engelke", "Christoph Maria Herbst"],
    releaseDate: "15. März 2025",
  },
  {
    slug: "drachenzorn",
    title: "Drachenzorn – Die Schlacht",
    poster: poster4,
    genre: "Fantasy / Abenteuer",
    duration: "156 Min.",
    fsk: "12",
    showtimes: ["15:00", "18:30", "21:30"],
    rating: 8.1,
    description:
      "In einer Welt, in der Drachen und Menschen einst in Frieden lebten, droht ein uralter Krieg erneut auszubrechen. Der junge Drachenreiter Kael muss eine gefährliche Reise antreten, um den Frieden wiederherzustellen – bevor es zu spät ist.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Oscar Isaac"],
    releaseDate: "10. April 2025",
  },
  {
    slug: "sommernaechte",
    title: "Sommernächte in der Stadt",
    poster: poster5,
    genre: "Romantik / Komödie",
    duration: "108 Min.",
    fsk: "6",
    showtimes: ["16:30", "19:00", "21:15"],
    rating: 6.9,
    description:
      "Drei Freundinnen erleben einen unvergesslichen Sommer in Berlin – zwischen Open-Air-Konzerten, spontanen Roadtrips und der Suche nach der großen Liebe. Eine warmherzige Komödie über Freundschaft und Neuanfänge.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    director: "Bora Dagtekin",
    cast: ["Karoline Herfurth", "Elyas M'Barek", "Jella Haase"],
    releaseDate: "20. März 2025",
  },
  {
    slug: "das-haus",
    title: "Das Haus am Ende der Straße",
    poster: poster6,
    genre: "Horror",
    duration: "112 Min.",
    fsk: "18",
    showtimes: ["20:30", "23:00"],
    rating: 7.5,
    description:
      "Eine junge Familie zieht in ein abgelegenes Haus auf dem Land. Doch seltsame Geräusche, verschwundene Gegenstände und die düsteren Geschichten der Nachbarn deuten darauf hin, dass sie nicht allein sind. Ein atmosphärischer Horrorfilm, der unter die Haut geht.",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    director: "Robert Eggers",
    cast: ["Anya Taylor-Joy", "Willem Dafoe"],
    releaseDate: "1. April 2025",
  },
];

export const getMovieBySlug = (slug: string): Movie | undefined =>
  movies.find((m) => m.slug === slug);
