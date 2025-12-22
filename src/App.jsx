import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();


  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  }, [location.pathname]);

  return (
    <>
      <Nav />

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </>
  );
};

export default App;
