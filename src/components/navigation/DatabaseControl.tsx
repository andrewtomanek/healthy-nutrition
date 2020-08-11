import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { initInventory, saveToStore } from "../../store/actions/storageActions";
import { FoodUnit, State } from "../../store/reducers/rootReducer";
import { AuthContext } from "../../auth/Auth";
import app from "../../auth/base";
import { AuthButton } from "../../styles/elements";
import styled from "styled-components";

export interface AuthObject {
  token: string;
  uid: string;
}

export interface UserObject {
  token: string;
  email: string;
  uid: string;
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

const DatabaseControl = (props: StateProps & DispatchProps) => {
  const [currentToken, setCurrentToken] = useState("");
  const [currentUid, setCurrentUid] = useState("");
  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        user.getIdToken().then(function (idToken) {
          setCurrentToken(idToken);
        });
        setCurrentUid(user.uid);
      }
    });
  }, []);

  const { currentUser } = useContext(AuthContext);
  const fetchData = () => {
    let authData: AuthObject = { token: "", uid: "" };
    authData = {
      token: currentToken,
      uid: currentUid,
    };
    props.initInventory(authData);
  };

  const saveData = () => {
    if (!props.foods) return;
    let userData: UserObject = {
      token: "",
      email: "",
      uid: "",
      foods: [],
      cart: [],
      allItemSum: null,
    };
    userData = {
      token: currentToken,
      email: currentUser.email,
      uid: currentUid,
      foods: props.foods,
      cart: props.cart,
      allItemSum: props.allItemSum,
    };
    props.saveToStore(userData);
  };
  return (
    <DataContainer>
      {currentUser &&
      props.foods &&
      props.cart.length > 0 &&
      props.foods.length > 0 ? (
        <AuthButton onClick={() => saveData()}>Uložit</AuthButton>
      ) : null}{" "}
      {currentUser ? (
        <AuthButton onClick={() => fetchData()}>Nahrát</AuthButton>
      ) : null}
      {currentUser && <LoginStatus>{currentUser.email}</LoginStatus>}
    </DataContainer>
  );
};

interface StateProps {
  cart: FoodUnit[];
  foods: FoodUnit[];
  allItemSum?: null;
}

interface DispatchProps {
  initInventory: (authData: AuthObject) => void;
  saveToStore: (userData: UserObject) => void;
}

const mapStateToProps = (state: State) => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initInventory: (authData: AuthObject) => dispatch(initInventory(authData)),
  saveToStore: (userData: UserObject) => dispatch(saveToStore(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseControl);

const DataContainer = styled.span`
  width: 95%;
  display: flex;
  grid-gap: 0.1rem 0.3rem;
  grid-auto-flow: column;
  align-content: center;
  align-items: center;
  padding: 0.1rem 0.3rem;
`;

const LoginStatus = styled.p`
  margin: 0;
  padding: 0.1rem 0.5rem;
  font-size: 1.1rem;
  font-weight: 900;
  background-color: var(--yellow);
  color: hsla(80, 100%, 30%, 1);
  border-radius: 0.5rem;
  border: 0.2rem solid var(--green);
  @media all and (max-width: 480px) {
    padding: 0rem 0.5rem;
    font-size: 2rem;
  }
`;
