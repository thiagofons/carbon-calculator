import "../../../styles/pages/login.sass"

import { useContext, useState } from "react";
import { useNavigate } from "react-router";

import AuthService from "../../../services/AuthService";
import ErrorValidation from "../../../components/error-validation/ErrorValidation";
import ErrorMessage from "../../../components/error-validation/ErrorMessage";

import { isEmailValid } from "../../../helpers/FormHelper";
import { AuthContext } from "../../../contexts/AuthContext";

type LoginPageProps = {
  authService: AuthService;
};

const LoginPage = (props: LoginPageProps) => {  
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  
  const [form, setForm] = useState({
    email: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
  });

  const [error, setError] = useState(null as any);

  const navigate = useNavigate();

  const login = () => {
    props.authService.login(form.email.value, form.password.value).then(
      () => {
        setError(false);
        setIsLoggedIn(true);
        navigate("/admin");
      },
      () => {
        setError(true);
      }
    );
  };

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <main className="login__page">
      <form
        action=""
        className="login__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>Entrar</h2>
        <div className="fields">
          <div className="field">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: { hasChanged: true, value: e.target.value },
                })
              }
            />
            <ErrorValidation
              hasChanged={form.email.hasChanged}
              errorMessage={"Email é obrigatório"}
              testId="email-required"
              type="required"
              value={form.email.value}
            />
          </div>
          <div className="field">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: { hasChanged: true, value: e.target.value },
                })
              }
            />
            {error && (
              <ErrorMessage code={301} message={"Usuário não encontrado"} />
            )}
            <ErrorValidation
              hasChanged={form.password.hasChanged}
              errorMessage={"Senha é obrigatória"}
              testId="password-required"
              type="required"
              value={form.password.value}
            />
          </div>
        </div>
        <div className="buttons">
          <button
            className="button button__blue"
            disabled={!isEmailValid(form.email.value) || !form.password.value}
            onClick={login}
          >
            Entrar
          </button>
          <button className="button button__grey" disabled={false} onClick={goToRegisterPage}>
            Registrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
