import { useState } from "react";
import { Camera } from "lucide-react";
import type { Movie } from "@/data/movies";

interface MovieSceneImagesProps {
  movie: Movie;
}

const MovieSceneImages = ({ movie }: MovieSceneImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!movie.sceneImages.length) return null;

  return (
    <>
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          <span className="text-gradient-gold flex items-center gap-2">
            <Camera className="h-6 w-6" />
            Szenenbilder
          </span>
        </h2>
        <div className="max-w-3xl grid grid-cols-2 gap-3">
          {movie.sceneImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(img)}
              className="group aspect-video rounded-xl overflow-hidden border border-border bg-card cursor-pointer"
            >
              <img
                src={img}
                alt={`${movie.title} – Szene ${i + 1}`}
                loading="lazy"
                width={960}
                height={540}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Szenenbild"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl border border-border"
          />
        </div>
      )}
    </>
  );
};

export default MovieSceneImages;
