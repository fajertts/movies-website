import { BadgeInfo, Film, Zap } from "lucide-react";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
      }}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black"></div>

      {/* content */}
      <div className="relative px-8 py-20 max-w-5xl mx-auto">
        {/* title */}
        <h1 className="text-5xl font-bold my-8">About Hoppers :</h1>

        {/* description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          Hoppers is a platform built for movie lovers. Our goal is to help you
          discover amazing movies, explore different genres, and find your next
          favorite film. Whether you enjoy action, drama, or comedy, Hoppers
          makes exploring cinema simple and fun.
          <br />
          We are passionate about movies and want to share that passion with
          you. Our team is dedicated to providing a seamless experience so you
          can focus on what matters most: enjoying great films.
        </p>

        {/* features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* card 1 */}
          <div className="bg-gray-900/80 backdrop-blur p-6 rounded-xl hover:scale-105 transition cursor-point ">
            <div className="mb-4 text-yellow-400">
              <Film size={32} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Discover Movies</h2>
            <p className="text-gray-400">
              Browse popular and trending movies from around the world.
            </p>
          </div>

          {/* card 2 */}
          <div className="bg-gray-900/80 backdrop-blur p-6 rounded-xl hover:scale-105 transition cursor-point ">
            <div className="mb-4 text-yellow-400">
              <BadgeInfo size={32} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Movie Information</h2>
            <p className="text-gray-400">
              Get detailed information about your favorite movies including
              cast, crew, and plot summaries.
            </p>
          </div>

          {/* card 3 */}
          <div className="bg-gray-900/80 backdrop-blur p-6 rounded-xl hover:scale-105 transition cursor-point ">
            <div className="mb-4 text-yellow-400">
              <Zap size={32} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Modern Tech</h2>
            <p className="text-gray-400">
              Built using modern technologies like React, TailwindCSS and movie
              APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
