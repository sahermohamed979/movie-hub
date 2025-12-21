import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/NavBar/Nav";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [MovieDetailsData, setMovieDetailsData] = useState(null);

  useEffect(() => {
    async function GetMovieDetails() {
      const respond = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ac7e5c509c05c95a09ccc13bb434f9f4`
      );
      const data = await respond.data;
      setMovieDetailsData(data);
    }
    GetMovieDetails();
  }, [id]);

  return (
    <>
      {MovieDetailsData !== null ? (
        <main className="bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
          {/* Hero Section with Backdrop */}
          <section className="relative overflow-hidden">
            {/* Backdrop */}
            <div className="absolute inset-0">
              <img
                src={`https://image.tmdb.org/t/p/original${MovieDetailsData.backdrop_path}`}
                alt="Movie Backdrop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent"></div>
            </div>

            {/* Hero Content */}
            <div className="relative container mx-auto px-4 py-12 lg:py-20">
              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                {/* Poster */}
                <div className="flex-shrink-0 w-64 md:w-72 lg:w-80">
                  <div className="relative group">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${MovieDetailsData.poster_path}`}
                      alt="Movie Poster"
                      className="w-full rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Rating Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 font-bold px-3 py-2 rounded-xl flex items-center gap-1 shadow-lg">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {MovieDetailsData.vote_average.toFixed(1)}
                    </div>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="flex-1 text-center md:text-left">
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {MovieDetailsData.title}
                  </h1>
                  {/* Tagline */}
                  {MovieDetailsData.tagline && (
                    <p className="text-lg text-gray-400 italic mb-6 flex items-center justify-center md:justify-start gap-2">
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      "{MovieDetailsData.tagline}"
                    </p>
                  )}
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6 text-sm">
                    <span className="flex items-center gap-1 bg-gray-800/80 px-3 py-1.5 rounded-full">
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {new Date(MovieDetailsData.release_date).getFullYear()}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-800/80 px-3 py-1.5 rounded-full">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {MovieDetailsData.runtime} min
                    </span>
                    <span className="flex items-center gap-1 bg-gray-800/80 px-3 py-1.5 rounded-full uppercase">
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                        />
                      </svg>
                      {MovieDetailsData.original_language}
                    </span>
                    <span className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {MovieDetailsData.status}
                    </span>
                  </div>
                  {/* Genres */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8">
                    {MovieDetailsData.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-4 py-2 bg-linear-to-r from-[#0f23b8]/30 to-[#209fff]/30 border border-purple-500/30 rounded-full text-sm font-medium hover:from-[#0f23b8]/50 hover:to-[#209fff]/50 transition-all cursor-pointer"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-8">
                    {/* User Score */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16">
                        <svg
                          className="w-full h-full transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="3"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            fill="none"
                            stroke={
                              MovieDetailsData.vote_average >= 7
                                ? "#10B981"
                                : MovieDetailsData.vote_average >= 5
                                ? "#F59E0B"
                                : "#EF4444"
                            }
                            strokeWidth="3"
                            strokeDasharray={`${
                              MovieDetailsData.vote_average * 10
                            }, 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                          {MovieDetailsData.vote_average.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        User
                        <br />
                        Score
                      </span>
                    </div>

                    {/* Votes */}
                    <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-xl">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold">
                          {MovieDetailsData.vote_count.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400">Votes</span>
                      </div>
                    </div>

                    {/* Popularity */}
                    <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-xl">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold">
                          {MovieDetailsData.popularity.toFixed(0)}
                        </span>
                        <span className="text-xs text-gray-400">
                          Popularity
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#0f23b8] to-[#209fff] hover:from-[#0d1a8f] hover:to-[#1a7acc] px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Watch Trailer
                    </button>
                    <button className="flex items-center gap-2 border-2 border-gray-600 hover:border-[#209fff] hover:text-[#209fff] px-6 py-3 rounded-xl font-semibold transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      Add to Favorites
                    </button>
                    <button className="w-12 h-12 border-2 border-gray-600 hover:border-blue-500 hover:text-blue-500 rounded-xl flex items-center justify-center transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </button>
                    <button className="w-12 h-12 border-2 border-gray-600 hover:border-green-500 hover:text-green-500 rounded-xl flex items-center justify-center transition-all">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Overview & Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Overview */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {MovieDetailsData.overview}
                    </p>
                  </div>

                  {/* Movie Details Grid */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Movie Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-900/50 rounded-xl p-4">
                        <span className="text-gray-400 text-sm">
                          Original Title
                        </span>
                        <p className="font-semibold mt-1">
                          {MovieDetailsData.original_title}
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4">
                        <span className="text-gray-400 text-sm">
                          Release Date
                        </span>
                        <p className="font-semibold mt-1">
                          {new Date(
                            MovieDetailsData.release_date
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4">
                        <span className="text-gray-400 text-sm">Runtime</span>
                        <p className="font-semibold mt-1">
                          {Math.floor(MovieDetailsData.runtime / 60)}h{" "}
                          {MovieDetailsData.runtime % 60}m
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4">
                        <span className="text-gray-400 text-sm">Status</span>
                        <p className="mt-1">
                          <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                            {MovieDetailsData.status}
                          </span>
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4">
                        <span className="text-gray-400 text-sm">Budget</span>
                        <p className="font-semibold mt-1 text-red-400">
                          {MovieDetailsData.budget > 0
                            ? `$${MovieDetailsData.budget.toLocaleString()}`
                            : "N/A"}
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4">
                        <span className="text-gray-400 text-sm">Revenue</span>
                        <p className="font-semibold mt-1 text-green-400">
                          {MovieDetailsData.revenue > 0
                            ? `$${MovieDetailsData.revenue.toLocaleString()}`
                            : "N/A"}
                        </p>
                      </div>
                      <div className="bg-gray-900/50 rounded-xl p-4 md:col-span-2">
                        <span className="text-gray-400 text-sm">IMDB</span>
                        <p className="mt-1">
                          <a
                            href={`https://www.imdb.com/title/${MovieDetailsData.imdb_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            {MovieDetailsData.imdb_id}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spoken Languages */}
                  {MovieDetailsData.spoken_languages &&
                    MovieDetailsData.spoken_languages.length > 0 && (
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                            />
                          </svg>
                          Spoken Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {MovieDetailsData.spoken_languages.map(
                            (lang, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-xl text-sm"
                              >
                                <svg
                                  className="w-4 h-4 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                  />
                                </svg>
                                {lang.english_name}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-8">
                  {/* Collection */}
                  {MovieDetailsData.belongs_to_collection && (
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                        Part of Collection
                      </h3>
                      <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${
                            MovieDetailsData.belongs_to_collection
                              .backdrop_path ||
                            MovieDetailsData.belongs_to_collection.poster_path
                          }`}
                          alt={MovieDetailsData.belongs_to_collection.name}
                          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h5 className="font-bold text-sm mb-2">
                            {MovieDetailsData.belongs_to_collection.name}
                          </h5>
                          <button className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                            View Collection
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Production Companies */}
                  {MovieDetailsData.production_companies &&
                    MovieDetailsData.production_companies.length > 0 && (
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          Production
                        </h3>
                        <div className="space-y-4">
                          {MovieDetailsData.production_companies
                            .slice(0, 4)
                            .map((company) => (
                              <div
                                key={company.id}
                                className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-3"
                              >
                                {company.logo_path ? (
                                  <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                                    <img
                                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                      alt={company.name}
                                      className="max-w-full max-h-full object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                      className="w-6 h-6 text-gray-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                      />
                                    </svg>
                                  </div>
                                )}
                                <div className="min-w-0">
                                  <p className="font-medium text-sm truncate">
                                    {company.name}
                                  </p>
                                  {company.origin_country && (
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                      <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                      {company.origin_country}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                  {/* External Links */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                      External Links
                    </h3>
                    <div className="space-y-2">
                      {MovieDetailsData.homepage && (
                        <a
                          href={MovieDetailsData.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-gray-900/50 hover:bg-gray-700/50 rounded-xl p-3 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                              />
                            </svg>
                          </div>
                          <span className="text-sm group-hover:text-blue-400 transition-colors">
                            Official Website
                          </span>
                          <svg
                            className="w-4 h-4 ml-auto text-gray-500 group-hover:text-blue-400 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      {MovieDetailsData.imdb_id && (
                        <a
                          href={`https://www.imdb.com/title/${MovieDetailsData.imdb_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-gray-900/50 hover:bg-gray-700/50 rounded-xl p-3 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.093-.405.093-.903v-2.86c0-.33-.013-.55-.04-.66-.025-.11-.067-.18-.127-.22l-.006.058zm-3.655-.075v1.665h.238c.083 0 .146-.017.19-.051.042-.034.07-.096.082-.185a1.47 1.47 0 00.018-.27v-.72c0-.13-.006-.22-.017-.27a.27.27 0 00-.08-.17c-.042-.04-.103-.06-.183-.06h-.248v.061zm8.334-6.513H5.01a1 1 0 00-1 1v15a1 1 0 001 1h13.979a1 1 0 001-1V4a1 1 0 00-1-1z" />
                            </svg>
                          </div>
                          <span className="text-sm group-hover:text-yellow-400 transition-colors">
                            IMDB
                          </span>
                          <svg
                            className="w-4 h-4 ml-auto text-gray-500 group-hover:text-yellow-400 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
