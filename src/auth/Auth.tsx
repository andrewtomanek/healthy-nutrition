import React, { useEffect, useState } from "react";
import app from "../firebase/firebase";

export const AuthContext = React.createContext<any>(null);

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<unknown | null>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
