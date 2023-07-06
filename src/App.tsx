import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";
import AuthService from "./services/AuthService";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/layout/Footer";
import LoginPage from "./pages/admin/login/LoginPage";
import RegisterPage from "./pages/admin/register/RegisterPage";

import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Admin from "./pages/admin/home/Admin";
import PrivateRoute from "./components/authentication/PrivateRoute";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({
      duration: 750,
      delay: 200,
      once: true,
    });
  }, []);

  setInterval(() => {
    console.log(isLoggedIn);
  }, 1000);

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <AuthProvider>
          <GlobalProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={<LoginPage authService={new AuthService()} />}
              />
              <Route
                path="/register"
                element={<RegisterPage authService={new AuthService()} />}
              />
              
              <Route path="/admin" element={<Admin />}/>
            </Routes>
          </GlobalProvider>
          <Footer />
        </AuthProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
