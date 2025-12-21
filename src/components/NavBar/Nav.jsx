import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg sticky w-full z-50 top-0 start-0 border-b border-gray-700/50">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to="/"
        >
          <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
            </svg>
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            MovieHub
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 md:flex-row md:items-center md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-white rounded-lg hover:bg-gray-800 hover:text-cyan-400 md:hover:bg-gray-800/50 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Popular"
                className="block py-2 px-4 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-cyan-400 md:hover:bg-gray-800/50 transition-all duration-300"
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                to="/Upcoming"
                className="block py-2 px-4 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-cyan-400 md:hover:bg-gray-800/50 transition-all duration-300"
              >
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                to="/TopRated"
                className="block py-2 px-4 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-cyan-400 md:hover:bg-gray-800/50 transition-all duration-300"
              >
                Top Rated
              </Link>
            </li>

            {/* Divider */}
            <li className="hidden md:block">
              <div className="h-6 w-px bg-gray-700 mx-2"></div>
            </li>

            <li>
              <Link
                to="/login"
                className="block py-2 px-4 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-cyan-400 md:hover:bg-gray-800/50 transition-all duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/SignUp"
                className="block py-2.5 px-5 mt-2 md:mt-0 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
