import React, { useContext, useEffect, useState } from "react";
// import { auth } from "../firebase";

const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [name, setName] = useState("");
  return (
    <AuthContext.Provider value={{ auth, setAuth, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
