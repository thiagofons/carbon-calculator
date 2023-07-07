import "../../../../styles/pages/admin.sass"

type AdminMonoFieldProps = {
  label: string;
  unity: string;
  value: number;
  setValue: (v: number) => void;
};

const AdminMonoField = (props: AdminMonoFieldProps) => {
  return (
    <section className="admin__mono__field">
      <label htmlFor="">{props.label}</label>
      <input
        type="text"
        onChange={(e) =>
          props.setValue(parseFloat(e.target.value ? e.target.value : "0"))
        }
      />
    </section>
  );
};

export default AdminMonoField;