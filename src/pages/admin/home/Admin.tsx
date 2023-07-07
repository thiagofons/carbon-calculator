import { useContext } from "react";
import { GlobalContext } from "../../../components/calculator/contexts/GlobalContext";

import AdminMonoField from "./assets/emission_factors/AdminMonoField";
import AdminMultiField from "./assets/emission_factors/AdminMultiField";

const Admin = () => {
  const { fatores, setFatores } = useContext(GlobalContext);

  return (
    <main>
      <section className="fatores">
        <form action="" className="fatores__form">
          {/**
          <AdminMultiField
            label="Energia Elétrica"
            setValue={setFatores}
            unity="KWh"
            value={fatores.energiaEletrica}
          />
          */}
          

        </form>
      </section>
    </main>
  );
};

export default Admin;
