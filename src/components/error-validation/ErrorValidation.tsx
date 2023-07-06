import { isEmailValid } from "../../helpers/FormHelper"

import "../../styles/main.sass";
import "../../styles/components/error-validation/error-validation.sass"

type ValidationErrorProps = {
  errorMessage: string;
  hasChanged: boolean;
  type: "required" | "email";
  value: string;
  testId: string;
};

const ErrorValidation = (props: ValidationErrorProps) => {
  if (!props.hasChanged) {
    return null;
  }

  const error = (
    <div className="error" data-testid={props.testId}>
      {props.errorMessage}
    </div>
  );

  if (props.type === "required") {
    return props.value === "" ? error : null;
  }

  return !isEmailValid(props.value) ? error : null;
};

export default ErrorValidation;
