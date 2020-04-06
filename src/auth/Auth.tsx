import React, { useEffect, useState } from "react";
import app from "./base";

export const AuthContext = React.createContext<any>(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
