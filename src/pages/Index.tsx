import CinemaHeader from "@/components/CinemaHeader";
import HeroCarousel from "@/components/HeroCarousel";
import MovieProgram from "@/components/MovieProgram";
import CinemaInfo from "@/components/CinemaInfo";
import CinemaEvents from "@/components/CinemaEvents";
import CinemaFooter from "@/components/CinemaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CinemaHeader />
      <main>
        <HeroCarousel />
        <MovieProgram />
        <CinemaEvents />
        <CinemaInfo />
      </main>
      <CinemaFooter />
    </div>
  );
};

export default Index;
