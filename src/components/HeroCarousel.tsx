import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCinema from "@/assets/hero-cinema.jpg";
import heroAction from "@/assets/hero-action.jpg";

const slides = [
  {
    image: heroCinema,
    title: "Willkommen im Filmpalast",
    subtitle: "Dein Kinoerlebnis beginnt hier",
    cta: "Programm ansehen",
  },
  {
    image: heroAction,
    title: "Blockbuster-Highlights",
    subtitle: "Die neuesten Filme jetzt auf der großen Leinwand",
    cta: "Tickets sichern",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-3 text-foreground leading-tight">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-6 max-w-lg">
            {slides[current].subtitle}
          </p>
          <a
            href="#programm"
            className="inline-block gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {slides[current].cta}
          </a>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/40 hover:bg-background/60 text-foreground transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/40 hover:bg-background/60 text-foreground transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
