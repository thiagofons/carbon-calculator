import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";


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
