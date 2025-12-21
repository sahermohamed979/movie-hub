import {
  Heart,
  Bookmark,
  Star,
  Calendar,
  Globe,
  Film,
  Play,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const {
    poster_path,
    title,
    vote_average,
    media_type = "Movie",
    release_date,
    original_language,
    overview,
    id,
  } = movie || {};

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";
  const releaseYear = release_date
    ? new Date(release_date).getFullYear()
    : "N/A";

  return (
    <div className="movie-card rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Card Image Container */}
      <div className="movie-card-img-wrapper relative overflow-hidden bg-gray-900 aspect-[2/3] group flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
          }}
        />

        {/* Rating Badge */}
        <div className="movie-rating absolute top-3 left-3 flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-3 py-1.5 rounded-full text-sm shadow-lg z-10">
          <Star size={14} className="fill-current" />
          <span>{vote_average?.toFixed(1)}</span>
        </div>

        {/* Media Type Badge */}
        <div className="movie-type absolute top-3 right-3 flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold capitalize shadow-lg z-10">
          <Film size={12} />
          {media_type}
        </div>

        {/* Overlay */}
        <div className="movie-card-overlay absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="overlay-content text-center px-4">
            {/* Play Button */}
            <Link
              to={`/MovieDetails/${id}`}
              className="btn btn-play bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full p-4 flex items-center justify-center hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg mx-auto mb-4 transform hover:scale-110"
              aria-label="Play movie"
            >
              <Play size={28} className="fill-current" />
            </Link>

            {/* Action Buttons */}
            <div className="overlay-actions flex gap-3 justify-center">
              <button
                className="btn btn-action bg-gray-800/80 border border-gray-600 text-white rounded-full p-2.5 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-300"
                aria-label="Add to favorites"
              >
                <Heart size={18} />
              </button>
              <button
                className="btn btn-action bg-gray-800/80 border border-gray-600 text-white rounded-full p-2.5 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                aria-label="Add to watchlist"
              >
                <Bookmark size={18} />
              </button>
              <Link
                to={`/MovieDetails/${id}`}
                className="btn btn-action bg-gray-800/80 border border-gray-600 text-white rounded-full p-2.5 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                aria-label="More info"
              >
                <Info size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="movie-card-body p-4 bg-gray-800/50 flex-grow">
        <h5 className="movie-title text-lg font-bold text-white mb-2 truncate">
          {title}
        </h5>
        <div className="movie-meta flex gap-4 mb-3 text-sm text-gray-400">
          <span className="movie-year flex items-center gap-1.5">
            <Calendar size={14} className="text-blue-400" />
            {releaseYear}
          </span>
          <span className="movie-lang flex items-center gap-1.5">
            <Globe size={14} className="text-cyan-400" />
            {original_language?.toUpperCase()}
          </span>
        </div>
        <p className="movie-overview text-gray-400 text-sm line-clamp-2">
          {overview}
        </p>
      </div>
    </div>
  );
}
