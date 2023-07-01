import "../../styles/pages/home.sass";

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import ClientCalculator from "../../components/calculator/ClientCalculator";
import { ClientProvider} from "../../components/calculator/contexts/ClientContext";

const Home = () => {
  return (
    <main className="home">
      <HomeHeader />

      <ClientProvider>
        <ClientCalculator />
      </ClientProvider>
      
      <HomeFooter />
    </main>
  );
};

export default Home;
