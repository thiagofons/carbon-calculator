import "../../styles/pages/home.sass";

import HomeHeader from "./HomeHeader";
import ClientCalculator from "../../components/calculator/ClientCalculator";
import { ClientProvider} from "../../components/calculator/contexts/ClientContext";

const Home = () => {
  return (
    <main className="home">
      <HomeHeader />
      
      <ClientProvider>
        <ClientCalculator />
      </ClientProvider>
    </main>
  );
};

export default Home;
