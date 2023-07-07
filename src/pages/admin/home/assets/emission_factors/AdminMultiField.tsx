import "../../../../../styles/pages/admin.sass";

import { MonthFactor } from "../../../../../components/calculator/contexts/GlobalContext";

type AdminMultiFieldProps = {
  label: string;
  unity: string;
  value: MonthFactor;
  setValue: (v: MonthFactor) => void;
};

const AdminMultiField = (props: AdminMultiFieldProps) => {
  return (
    <section className="admin__multi__field">
      <div className="admin__field__name">
        <label htmlFor="">{props.label}</label>
      </div>
      <div className="admin__field__content">
        <div className="field">
          <label htmlFor="">Janeiro</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.jan}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                jan: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Fevereiro</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.feb}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                feb: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Março</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.mar}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                mar: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Abril</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.apr}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                apr: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Maio</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.may}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                may: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Junho</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.jun}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                jun: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Julho</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.jul}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                jul: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Agosto</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.aug}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                aug: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Setembro</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.sep}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                sep: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Outubro</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.oct}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                oct: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Novembro</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.nov}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                nov: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>

        <div className="field">
          <label htmlFor="">Dezembro</label>
          <input
            type="text"
            placeholder={props.unity}
            value={props.value.dec}
            onChange={(e) =>
              props.setValue({
                ...props.value,
                dec: parseFloat(e.target.value ? e.target.value : "0"),
              })
            }
          />
        </div>
      </div>
      <button className="admin__field__button">Confirmar alterações</button>
    </section>
  );
};

export default AdminMultiField;
