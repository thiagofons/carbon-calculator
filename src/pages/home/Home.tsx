import "../../styles/pages/home.sass"

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import ClientCalculator from "../../components/calculator/ClientCalculator";

const Home = () => {
  return (
    <main className="home">
      <HomeHeader />
      <ClientCalculator />
      <HomeFooter />
    </main>
  )
}

export default Home;