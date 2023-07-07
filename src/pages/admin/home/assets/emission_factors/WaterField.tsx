import { useState } from "react";

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
  const [form, setForm] = useState<WaterFieldForm>({
    efluenteLiqDomestico: 0.8,
    compOrganicoDegradavelEntrada: 0.464,
    compOrganicoRemovido: 0.344,
    qtdNitrogenio: 0.046,
    fatorEmissaoNitrogenio: 0.005,
    tipoTratamento: "Tratamento aeróbio (lodo ativado, lagoa aerada, etc)",
    fatorEmissaoMetanoDBO: 0.018,
    fatorEmissaoMetanoDQO: 0.25,
    fatorEmissaoOxidoNitroso: 0.005,
    qtdMetanoRecuperada: 0,
    qtdEfluenteLiqTratadoLancadoAmbiente: 0,
    compOrganicoDegradavelApos: 0.12,
    qtdNitrogenioApos: 0.02,
    fatorEmissaoOxidoNitrosoApos: 0.005,
    totalEmissaoMetanoTratamentoDisposicao: 0,
    totalEmissaoOxidoNitrosoTratamentoDisposicao: 0,
    totalEmissaoCo2eTratamentoDisposicao: 0,
    totalEmissaoCo2BiogenicoTratamento: 0,
  });

  
  return <section className="water__field"></section>;
};

export default WaterField;
