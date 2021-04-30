import React, { useContext } from "react";
import { AuthContext } from "../../auth/Auth";
import {
  NavigationList,
  NavigationLi,
  NavigationLink,
  AuthButton,
} from "../../styles/elements";
import app from "../../firebase/firebase";

const AuthControl = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }
  return (
    <NavigationList>
      {!currentUser ? (
        <React.Fragment>
          {" "}
          <NavigationLi>
            <NavigationLink to="/login">Přihlásit</NavigationLink>
          </NavigationLi>
          <NavigationLi>
            <NavigationLink to="/signup">Registrace</NavigationLink>
          </NavigationLi>{" "}
        </React.Fragment>
      ) : (
        <NavigationLi>
          <AuthButton onClick={() => app.auth().signOut()}>Odhlásit</AuthButton>{" "}
        </NavigationLi>
      )}
    </NavigationList>
  );
};

export default AuthControl;
