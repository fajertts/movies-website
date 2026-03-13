import {  useEffect,useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { tmdb } from "../api/Base";
import { useNavigate } from "react-router-dom";


interface Movie {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

export default function Hero() {

  const navigate = useNavigate();


    const [index, setIndex] = useState(0);
    const {data,isLoading} = useQuery({
        queryKey: ["trending"],
        queryFn: async () => {
            const response = await tmdb.get("/trending/movie/week");
            return response.data.results as Movie[];
        }
    });

    useEffect(() => {

        if(!data) return;

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [data]);

    if(isLoading|| !data) return <div>Something Went Wrong 404..</div>;

    const movie = data[index];

    const background = movie?.backdrop_path
  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  : "";

    return (
           <section
      className="w-full relative h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* content */}
      <div className="relative z-10 max-w-xl pt-40 pl-16 text-white">

        <h1 className="text-5xl font-bold mb-6 mt-15">
          {movie.title}
        </h1>

        <p className="text-lg leading-relaxed line-clamp-4">
          {movie.overview}
        </p>

        <div className="mt-6 flex gap-4">

          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200 cursor-pointer"
          onClick ={() =>navigate("/Login")}>
            play
          </button>

          <button className="bg-gray-700/70 px-6 py-2 rounded hover:bg-gray-600 cursor-pointer">
            More Info
          </button>

        </div>
      </div>
    </section>);
}
