import poster1 from "@/assets/movie-poster-1.jpg";
import poster2 from "@/assets/movie-poster-2.jpg";
import poster3 from "@/assets/movie-poster-3.jpg";
import poster4 from "@/assets/movie-poster-4.jpg";
import poster5 from "@/assets/movie-poster-5.jpg";
import poster6 from "@/assets/movie-poster-6.jpg";

import sceneAstronaut1 from "@/assets/scene-astronaut-1.jpg";
import sceneAstronaut2 from "@/assets/scene-astronaut-2.jpg";
import sceneSchatten1 from "@/assets/scene-schatten-1.jpg";
import sceneSchatten2 from "@/assets/scene-schatten-2.jpg";
import sceneWald1 from "@/assets/scene-wald-1.jpg";
import sceneWald2 from "@/assets/scene-wald-2.jpg";
import sceneDrachen1 from "@/assets/scene-drachen-1.jpg";
import sceneDrachen2 from "@/assets/scene-drachen-2.jpg";
import sceneSommer1 from "@/assets/scene-sommer-1.jpg";
import sceneSommer2 from "@/assets/scene-sommer-2.jpg";
import sceneHaus1 from "@/assets/scene-haus-1.jpg";
import sceneHaus2 from "@/assets/scene-haus-2.jpg";

import castRyanGosling from "@/assets/cast/ryan-gosling.jpg";
import castSandraBullock from "@/assets/cast/sandra-bullock.jpg";
import castKeHuyQuan from "@/assets/cast/ke-huy-quan.jpg";
import castNinaHoss from "@/assets/cast/nina-hoss.jpg";
import castLarsEidinger from "@/assets/cast/lars-eidinger.jpg";
import castJellaHaase from "@/assets/cast/jella-haase.jpg";
import castAnkeEngelke from "@/assets/cast/anke-engelke.jpg";
import castChristophMariaHerbst from "@/assets/cast/christoph-maria-herbst.jpg";
import castTimotheeChalamet from "@/assets/cast/timothee-chalamet.jpg";
import castZendaya from "@/assets/cast/zendaya.jpg";
import castOscarIsaac from "@/assets/cast/oscar-isaac.jpg";
import castKarolineHerfurth from "@/assets/cast/karoline-herfurth.jpg";
import castElyasMbarek from "@/assets/cast/elyas-mbarek.jpg";
import castAnyaTaylorJoy from "@/assets/cast/anya-taylor-joy.jpg";
import castWillemDafoe from "@/assets/cast/willem-dafoe.jpg";

export interface CastMember {
  name: string;
  role?: string;
  portrait: string;
}

export interface CrewMember {
  name: string;
  role: string;
}

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
  cast: CastMember[];
  releaseDate: string;
  crew: CrewMember[];
  sceneImages: string[];
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
    cast: [
      { name: "Ryan Gosling", role: "Dr. Ryland Grace", portrait: castRyanGosling },
      { name: "Sandra Bullock", role: "Commander Yáo", portrait: castSandraBullock },
      { name: "Ke Huy Quan", role: "Rocky (Stimme)", portrait: castKeHuyQuan },
    ],
    releaseDate: "27. März 2025",
    crew: [
      { name: "Phil Lord", role: "Regie" },
      { name: "Christopher Miller", role: "Produktion" },
      { name: "Drew Goddard", role: "Drehbuch" },
      { name: "Janusz Kamiński", role: "Kamera" },
      { name: "Hans Zimmer", role: "Musik" },
    ],
    sceneImages: [sceneAstronaut1, sceneAstronaut2],
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
    cast: [
      { name: "Nina Hoss", role: "Laura Brandt", portrait: castNinaHoss },
      { name: "Lars Eidinger", role: "Viktor Engel", portrait: castLarsEidinger },
      { name: "Jella Haase", role: "Sophie Kern", portrait: castJellaHaase },
    ],
    releaseDate: "3. April 2025",
    crew: [
      { name: "Thomas Vinterberg", role: "Regie" },
      { name: "Stefan Arndt", role: "Produktion" },
      { name: "Florian Henckel von Donnersmarck", role: "Drehbuch" },
      { name: "Hoyte van Hoytema", role: "Kamera" },
      { name: "Max Richter", role: "Musik" },
    ],
    sceneImages: [sceneSchatten1, sceneSchatten2],
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
    cast: [
      { name: "Anke Engelke", role: "Mia (Stimme)", portrait: castAnkeEngelke },
      { name: "Christoph Maria Herbst", role: "Felix (Stimme)", portrait: castChristophMariaHerbst },
    ],
    releaseDate: "15. März 2025",
    crew: [
      { name: "Caroline Link", role: "Regie" },
      { name: "Jakob Claussen", role: "Produktion" },
      { name: "Ruth Toma", role: "Drehbuch" },
      { name: "Jürgen Jürges", role: "Kamera" },
      { name: "Niki Reiser", role: "Musik" },
    ],
    sceneImages: [sceneWald1, sceneWald2],
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
    cast: [
      { name: "Timothée Chalamet", role: "Kael", portrait: castTimotheeChalamet },
      { name: "Zendaya", role: "Lyra", portrait: castZendaya },
      { name: "Oscar Isaac", role: "König Aldric", portrait: castOscarIsaac },
    ],
    releaseDate: "10. April 2025",
    crew: [
      { name: "Denis Villeneuve", role: "Regie" },
      { name: "Mary Parent", role: "Produktion" },
      { name: "Jon Spaihts", role: "Drehbuch" },
      { name: "Greig Fraser", role: "Kamera" },
      { name: "Hans Zimmer", role: "Musik" },
    ],
    sceneImages: [sceneDrachen1, sceneDrachen2],
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
    cast: [
      { name: "Karoline Herfurth", role: "Lena", portrait: castKarolineHerfurth },
      { name: "Elyas M'Barek", role: "Cem", portrait: castElyasMbarek },
      { name: "Jella Haase", role: "Nele", portrait: castJellaHaase },
    ],
    releaseDate: "20. März 2025",
    crew: [
      { name: "Bora Dagtekin", role: "Regie & Drehbuch" },
      { name: "Lena Schömann", role: "Produktion" },
      { name: "Daniel Gottschalk", role: "Kamera" },
      { name: "Beckmann & Djorkaeff", role: "Musik" },
    ],
    sceneImages: [sceneSommer1, sceneSommer2],
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
    cast: [
      { name: "Anya Taylor-Joy", role: "Clara", portrait: castAnyaTaylorJoy },
      { name: "Willem Dafoe", role: "Der Nachbar", portrait: castWillemDafoe },
    ],
    releaseDate: "1. April 2025",
    crew: [
      { name: "Robert Eggers", role: "Regie & Drehbuch" },
      { name: "Ari Aster", role: "Produktion" },
      { name: "Jarin Blaschke", role: "Kamera" },
      { name: "Mark Korven", role: "Musik" },
    ],
    sceneImages: [sceneHaus1, sceneHaus2],
  },
];

export const getMovieBySlug = (slug: string): Movie | undefined =>
  movies.find((m) => m.slug === slug);
