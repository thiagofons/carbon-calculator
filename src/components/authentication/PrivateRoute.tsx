import React from "react";
import { Route, redirect } from "react-router-dom";
import LoginPage from "../../pages/admin/login/LoginPage";
import AuthService from "../../services/AuthService";

type PrivateRouteProps = {
  path: string;
  component: React.ReactNode;
  isAuthenticated: boolean;
};

const PrivateRoute = (props: PrivateRouteProps) => (
  <Route
    path={props.path}
    element={
      props.isAuthenticated ? (
        props.component
      ) : (
        <LoginPage authService={new AuthService()} />
      )
    }
  />
);

export default PrivateRoute;