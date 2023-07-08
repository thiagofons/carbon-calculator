import { useContext } from "react";
import { GlobalContext } from "../../../components/calculator/contexts/GlobalContext";

import AdminMonoField from "./assets/emission_factors/AdminMonoField";
import AdminMultiField from "./assets/emission_factors/AdminMultiField";
import WaterField from "./assets/emission_factors/WaterField";

import "../../../styles/components/admin/admin.sass";

const Admin = () => {
  const { fatores, setFatores } = useContext(GlobalContext);
  console.log(localStorage.getItem("userId"));
  
  return (
    <main className="fatores">
      {/**
          <AdminMultiField
            label="Energia Elétrica"
            setValue={setFatores}
            unity="KWh"
            value={fatores.energiaEletrica}
          />
          */}
      <WaterField />
    </main>
  );
};

export default Admin;
