import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import SignUp from "./pages/Signup/SignUp.jsx";
import Popular from "./pages/Popular/Popular.jsx";
import TopRated from "./pages/TopRated/TopRated.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Upcoming from "./pages/Upcoming/upcoming.jsx";
import App from "./App.jsx";
// cspell:ignore fortawesome fontawesome
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Bounce, ToastContainer } from "react-toastify";

const routes  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
      { path: "/MovieDetails/:id", element: <MovieDetails /> },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      { path: "/popular", element: <Popular /> },
      { path: "/topRated", element: <TopRated /> },
      { path: "/upcoming", element: <Upcoming /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </StrictMode>
);
