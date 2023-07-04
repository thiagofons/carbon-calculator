import NavBar from "./components/layout/NavBar";
import Home from "./pages/home/Home";
import Container from "./components/layout/Container";

import { GlobalProvider } from "./components/calculator/contexts/GlobalContext";

function App() {
  return (
    <Container>
      <NavBar />
      <GlobalProvider>
        <Home />
      </GlobalProvider>
    </Container>
  );
}

export default App;
