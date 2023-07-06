import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";
import AuthService from "./services/AuthService";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/layout/Footer";
import LoginPage from "./pages/admin/login/LoginPage";



function App() {
  useEffect(() => {
    Aos.init({
      duration: 750,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<LoginPage authService={new AuthService()}/>}/>
          </Routes>
          
        </GlobalProvider>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
