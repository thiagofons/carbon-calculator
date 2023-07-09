import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/electric_energy.sass";
import "aos/dist/aos.css";

import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";
import { GlobalContext } from "../contexts/GlobalContext";
import AddButton from "../assets/AddButton";

const ElectricEnergy = () => {
  const { dataAtual, fatores } = useContext(GlobalContext);
  const { data, setData } = useContext(ClientContext);

  const consumption = (valor: number) => {
    if (fatores) {
      switch (dataAtual.mes) {
        case 0:
          return fatores?.energiaEletrica.jan * valor;
        case 1:
          return fatores?.energiaEletrica.feb * valor;
        case 2:
          return fatores?.energiaEletrica.mar * valor;
        case 3:
          return fatores?.energiaEletrica.apr * valor;
        case 4:
          return fatores?.energiaEletrica.may * valor;
        case 5:
          return fatores?.energiaEletrica.jun * valor;
        case 6:
          return fatores?.energiaEletrica.jul * valor;
        case 7:
          return fatores?.energiaEletrica.aug * valor;
        case 8:
          return fatores?.energiaEletrica.sep * valor;
        case 9:
          return fatores?.energiaEletrica.oct * valor;
        case 10:
          return fatores?.energiaEletrica.nov * valor;
        case 11:
          return fatores?.energiaEletrica.dec * valor;
        default:
          return 0;
      }
    }
    else {
      return 0;
    }

  };

  return (
    <section className="box electric__energy" data-aos="fade-up">
      <header className="box__header">
        <h3>Consumo de energia elétrica</h3>
      </header>
      <main className="box__body">
        <section className="consumption">
          <div className="consumption__input">
            <label>Consumo</label>
            <input
              type="text"
              className="text__input"
              placeholder="KWh"
              onChange={(e) => {
                setData({
                  ...data,
                  inventario: {
                    ...data.inventario,
                    energiaEletrica: {
                      mes: !isNaN(parseFloat(e.target.value))
                        ? consumption(parseFloat(e.target.value))
                        : 0,
                      ano: !isNaN(parseFloat(e.target.value))
                        ? consumption(parseFloat(e.target.value)) * 12
                        : 0,
                    },
                  },
                });
              }}
            />
          </div>
          <AddButton value={data.inventario.energiaEletrica.mes} />
        </section>
        <PartialResults
          month={data.inventario.energiaEletrica.mes}
          year={data.inventario.energiaEletrica.ano}
        />
      </main>
    </section>
  );
};

export default ElectricEnergy;
