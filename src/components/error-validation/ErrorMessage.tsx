import "../../styles/main.sass";

type ErrorCode = {
  code: number;
  message: string;
};

const ErrorMessage = (props: ErrorCode) => {
  return (
    <div className="error">
      {props.code}: {props.message}
    </div>
  );
};

export default ErrorMessage;
