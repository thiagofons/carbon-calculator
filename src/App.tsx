import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";

export const GOOGLE_MAPS_API_KEY = "AIzaSyCNvGg-xIr2-PS1ycPKonztZT0zWa2VSH4"

function App() {
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
