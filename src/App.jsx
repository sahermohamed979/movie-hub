import { Outlet } from "react-router";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
