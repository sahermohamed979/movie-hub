import Footer from "../../components/Footer/Footer";
import Nav from "../../components/NavBar/Nav";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    async function GetTrending() {
      const respond = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
      );

      const data = await respond.data.results;
      setTrending(data);
    }

    GetTrending();
  }, []);

  return (
    <div className="bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen">
      {trending !== null ? (
        <section className="trending-section py-8">
          <div className="container mx-auto px-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Trending Movies
              </h1>
              <p className="text-gray-400">
                Discover the most popular movies right now
              </p>
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trending.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:scale-[1.02] transition-all duration-300"
                >
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-10">
              <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                🎥 Load More Movies
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
