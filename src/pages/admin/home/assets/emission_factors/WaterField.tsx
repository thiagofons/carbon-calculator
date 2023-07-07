import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../../../../../FirebaseConfig";

type WaterFieldForm = {
  efluenteLiqDomestico: number;
  compOrganicoDegradavelEntrada: number;
  compOrganicoRemovido: number;
  qtdNitrogenio: number;
  fatorEmissaoNitrogenio: number;
  tipoTratamento: string;
  fatorEmissaoMetanoDBO: number;
  fatorEmissaoMetanoDQO: number;
  fatorEmissaoOxidoNitroso: number;
  qtdMetanoRecuperada: number;
  qtdEfluenteLiqTratadoLancadoAmbiente: number;
  compOrganicoDegradavelApos: number;
  qtdNitrogenioApos: number;
  fatorEmissaoOxidoNitrosoApos: number;
  totalEmissaoMetanoTratamentoDisposicao: number;
  totalEmissaoOxidoNitrosoTratamentoDisposicao: number;
  totalEmissaoCo2eTratamentoDisposicao: number;
  totalEmissaoCo2BiogenicoTratamento: number;
};

const WaterField = () => {
  const [form, setForm] = useState({});

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "fatores", "agua");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setForm(docSnap.data());
        console.log(form);
      } else {
        console.log("No such document!");
      }
    };

    getData();
  }, []);

  return <section className="water__field"></section>;
};

export default WaterField;
