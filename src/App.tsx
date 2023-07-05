import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/layout/Footer";



function App() {
  useEffect(() => {
    Aos.init({
      duration: 750,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <Container>
      <NavBar />
      <GlobalProvider>
        <Home />
      </GlobalProvider>
      <Footer />
    </Container>
  );
}

export default App;
