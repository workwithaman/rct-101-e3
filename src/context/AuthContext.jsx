import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false)
  
  const handleAuth = (state) => {
    setAuth(state)
  }
  return <AuthContext.Provider value={{isAuth, handleAuth}}>{children}</AuthContext.Provider>;
};
