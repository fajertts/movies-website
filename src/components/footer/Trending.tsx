import { useEffect, useRef, useState } from "react";
import { tmdb } from "../../api/base";

type TrendMovie = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

const Trending = () => {
  const [movies, setMovies] = useState<TrendMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await tmdb().get(`/trending/movie/week`);

      setMovies(res.data.results);
    };

    fetchMovies();
  }, []);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -216,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 216,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-8 py-10 relative">
      <h2 className="text-2xl font-bold text-white mb-4">Trending Now</h2>

      {/* arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-[50%] z-10 bg-black/60 text-white p-3 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-[50%] z-10 bg-black/60 text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* slider */}
      <div
        ref={sliderRef}
        className="max-w-[1728px] flex gap-4 overflow-x-scroll scrollbar-hide"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[200px] relative cursor-pointer hover:scale-110 transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="rounded-lg"
            />

            <p className="absolute bottom-2 left-2 text-white text-sm">
              {movie.title || movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
