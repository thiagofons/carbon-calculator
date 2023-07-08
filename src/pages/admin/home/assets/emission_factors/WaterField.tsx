import { useState, useEffect } from "react";
import { getObjectFromFirestore } from "../../../../../helpers/FirebaseHelper";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../FirebaseConfig";

/* styles import */
import "../../../../../styles/main.sass";
import "../../../../../styles/components/admin/form.sass";

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
  const [form, setForm] = useState<WaterFieldForm | null>(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchObject = async () => {
      try {
        // Chame a função para buscar o objeto
        const fetchedObject = await getObjectFromFirestore("agua");
        await setForm(fetchedObject as WaterFieldForm);
        console.log(form);
      } catch (error) {
        // Trate o erro, se necessário
        console.log("error");
      }
    };
    fetchObject();
  }, [update]);

  const updateOnDatabase = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (form) {
      await setDoc(doc(db, "agua", "agua"), form);
      setUpdate(!update);
    }
  };


  return (
    <section className="admin__form water__field">
      <header>
        <h2>Água</h2>
      </header>
      <main>
        <div className="emission__input">
          <label>Efluente líquido doméstico</label>
          <div className="input">
            <input
              type="number"
              value={form?.efluenteLiqDomestico}
              
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        efluenteLiqDomestico: parseFloat(
                          e.target.value
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Componente orgânico degradável (entrada)</label>
          <div className="input">
            <input
              type="number"
              value={form?.compOrganicoDegradavelEntrada}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        compOrganicoDegradavelEntrada: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Componente orgânico removido</label>
          <div className="input">
            <input
              type="number"
              value={form?.compOrganicoRemovido}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        compOrganicoRemovido: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Quantidade de nitrogênio</label>
          <div className="input">
            <input
              type="number"
              value={form?.qtdNitrogenio}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        qtdNitrogenio: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Fator de emissão do nitrogênio</label>
          <div className="input">
            <input
              type="number"
              value={form?.fatorEmissaoNitrogenio}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        fatorEmissaoNitrogenio: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Tipo do tratamento</label>
          <div className="input">
            <input
              type="text"
              value={form?.tipoTratamento}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        tipoTratamento: e.target.value ? e.target.value : "",
                      }
                    : form
                )
              }
            />
          </div>
        </div>
        <div className="emission__input">
          <label>Fator de emissão do metano (DBO)</label>
          <div className="input">
            <input
              type="number"
              value={form?.fatorEmissaoMetanoDBO}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        fatorEmissaoMetanoDBO: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Fator de emissão do metano (DQO)</label>
          <div className="input">
            <input
              type="number"
              value={form?.fatorEmissaoMetanoDQO}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        fatorEmissaoMetanoDQO: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Fator de emissão do óxido nitroso</label>
          <div className="input">
            <input
              type="number"
              value={form?.fatorEmissaoOxidoNitroso}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        fatorEmissaoOxidoNitroso: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Quantidade de metano recuperada</label>
          <div className="input">
            <input
              type="number"
              value={form?.qtdMetanoRecuperada}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        qtdMetanoRecuperada: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>
            Quantidade de efluente líquido tratado lançado no ambiente
          </label>
          <div className="input">
            <input
              type="number"
              value={form?.qtdEfluenteLiqTratadoLancadoAmbiente}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        qtdEfluenteLiqTratadoLancadoAmbiente: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Componente orgânico degradável (saída)</label>
          <div className="input">
            <input
              type="number"
              value={form?.compOrganicoDegradavelApos}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        compOrganicoDegradavelApos: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
        <div className="emission__input">
          <label>Quantidade de nitrogênio (saída)</label>
          <div className="input">
            <input
              type="number"
              value={form?.qtdNitrogenioApos}
              onChange={(e) =>
                setForm(
                  form
                    ? {
                        ...form,
                        qtdNitrogenioApos: parseFloat(
                          e.target.value ? e.target.value : "0"
                        ),
                      }
                    : form
                )
              }
            />
            <span className="input__unity">unidade</span>
          </div>
        </div>
      </main>
      <footer>
        <button className="add__to__db__btn" onClick={(e) => updateOnDatabase(e)}>
          Atualizar valores
        </button>
      </footer>
    </section>
  );
};

export default WaterField;
