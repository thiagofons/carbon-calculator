import { createContext, useState } from "react";

type AuthProps = {
  children: any;
};

type AuthData = {
  isLoggedIn: boolean;
  setIsLoggedIn: (i: boolean) => void;
};

export const AuthContext = createContext<AuthData>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AuthProvider = (props: AuthProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {props.children}
    </AuthContext.Provider>
  )
};
