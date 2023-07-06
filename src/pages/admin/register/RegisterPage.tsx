
import "../../../styles/pages/login.sass"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmailValid, isPasswordValid } from "../../../helpers/FormHelper";
import AuthService from "../../../services/AuthService";

type RegisterPageProps = {
  authService: AuthService;
};

const RegisterPage = (props: RegisterPageProps) => {
  const [form, setForm] = useState({
    name: {
      hasChanged: false,
      value: "",
    },
    lastName: {
      hasChanged: false,
      value: "",
    },
    email: {
      hasChanged: false,
      value: "",
    },
    password: {
      hasChanged: false,
      value: "",
    },
    passwordConfirmation: {
      hasChanged: false,
      value: "",
    },
  });
  const [formValid, setFormValid] = useState(false);
  const isFormValid = () => {
    if (
      form.name.value &&
      form.lastName.value &&
      isEmailValid(form.email.value) &&
      isPasswordValid(form.password.value) &&
      form.passwordConfirmation.value !== ""
    ) {
      return true;
    }
    return false;
  };

  const [error, setError] = useState(false as any);

  const navigate = useNavigate();
  const register = () => {
    props.authService
      .register(
        form.name.value,
        form.lastName.value,
        form.email.value,
        form.password.value
      )
      .then(
        () => {
          setError(false);
          navigate("/admin");
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <main className="login__page">
      <form
        action=""
        className="login__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>Registrar</h2>
        <div className="fields">
          <div className="field">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setForm({
                  ...form,
                  name: { hasChanged: true, value: e.target.value },
                });
                setFormValid(isFormValid);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="">Sobrenome</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              onChange={(e) => {
                setForm({
                  ...form,
                  lastName: { hasChanged: true, value: e.target.value },
                });
                setFormValid(isFormValid);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => {
                setForm({
                  ...form,
                  email: { hasChanged: true, value: e.target.value },
                });
                setFormValid(isFormValid);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setForm({
                  ...form,
                  password: { hasChanged: true, value: e.target.value },
                });
                setFormValid(isFormValid);
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="">Confirme a senha</label>
            <input
              type="password"
              name="password-confirm"
              id="password-confirm"
              onChange={(e) => {
                setForm({
                  ...form,
                  passwordConfirmation: {
                    hasChanged: true,
                    value: e.target.value,
                  },
                });
                setFormValid(isFormValid);
              }}
            />
          </div>
        </div>
        <div className="buttons">
          <button
            className={`button ${formValid ? "button__blue" : "button__grey"}`}
            disabled={!isFormValid}
            onClick={(e) => (formValid ? register : setError(true))}
          >
            Registrar
          </button>
        </div>
        <div className="back__login">
          
          <Link to={"/login"} className="link" >Voltar para login</Link>
        </div>
      </form>
      
    </main>
  );
};

export default RegisterPage;