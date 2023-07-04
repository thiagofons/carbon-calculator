import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";

import Aos from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <Container>
      <NavBar />
      <GlobalProvider>
        {" "}
        {/** provides emission factors for all the elements */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </Container>
  );
}

export default App;
