import { useState, useRef, useEffect, useMemo } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import cinemaLogo from "@/assets/cinema-logo.png";
import { movies } from "@/data/movies";

const navItems = [
  { label: "Programm", href: "#programm" },
  { label: "Aktuell", href: "#aktuell" },
  { label: "Gutscheine", href: "#gutscheine" },
  { label: "Events", href: "#events" },
  { label: "Über uns", href: "/ueber-uns" },
];

const CinemaHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return movies.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.genre.toLowerCase().includes(q) ||
        m.director.toLowerCase().includes(q) ||
        m.cast.some((c) => c.name.toLowerCase().includes(q) || c.role?.toLowerCase().includes(q)) ||
        m.crew.some((c) => c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q))
    );
  }, [query]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = (slug: string) => {
    setSearchOpen(false);
    setQuery("");
    navigate(`/film/${slug}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-3">
          <img src={cinemaLogo} alt="Filmpalast Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-gradient-gold tracking-wide">FILMPALAST</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={searchRef} className="relative">
            <button
              className="p-2 text-foreground/70 hover:text-primary transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 glass-dark border border-border rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
                  <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Film, Schauspieler, Regisseur suchen…"
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  />
                  {query && (
                    <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {query.length >= 2 && (
                  <div className="max-h-80 overflow-y-auto">
                    {results.length === 0 ? (
                      <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                        Keine Ergebnisse gefunden
                      </div>
                    ) : (
                      results.map((movie) => (
                        <button
                          key={movie.slug}
                          onClick={() => handleSelect(movie.slug)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-accent/50 transition-colors text-left"
                        >
                          <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-10 h-14 object-cover rounded shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">{movie.title}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {movie.genre} · {movie.duration}
                            </p>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <button className="hidden md:flex p-2 text-foreground/70 hover:text-primary transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button
            className="md:hidden p-2 text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden glass-dark border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default CinemaHeader;
