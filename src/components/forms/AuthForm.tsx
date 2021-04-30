import React, { useState, useCallback, useContext, useEffect } from "react";
import app from "../../firebase/firebase";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { AuthContext } from "../../auth/Auth";
import validateAuth, { ValidationErrors } from "../../auth/validateAuth";
import styled from "styled-components";

interface PropsFromState {
  register: boolean;
}

type LoginObject = {
  target: { elements: { email: { value: "" }; password: { value: "" } } };
};

const AuthForm = ({
  history,
  register,
}: PropsFromState & RouteComponentProps) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({
    email: null,
    password: null,
  });
  const [isSubmitting, setSubmitting] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const logIn = async (
    event: React.FormEvent<HTMLFormElement> & Partial<LoginObject>
  ) => {
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  const signUp = async (
    event: React.FormEvent<HTMLFormElement> & LoginObject
  ) => {
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [history, currentUser]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();
    setSubmitting(true);
    if (register) {
      signUp(event);
    } else {
      logIn(event);
    }
  };

  const handleChange = useCallback(
    (event) => {
      const validationErrors = validateAuth(values);
      setErrors(validationErrors);
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    },
    [errors, isSubmitting]
  );

  const handleBlur = () => {
    const validationErrors = validateAuth(values);
    setErrors(validationErrors);
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        value={values.email}
        className={(errors.email && "error__input") || "login__input"}
        autoComplete="off"
        placeholder="E-mail"
      />
      {errors.email ? (
        <ErrorText>{errors.email}</ErrorText>
      ) : (
        <ErrorSpan>noErrors</ErrorSpan>
      )}
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        className={(errors.password && "error__input") || "login__input"}
        name="password"
        type="password"
        placeholder="Heslo"
      />
      {errors.password ? (
        <ErrorText>{errors.password}</ErrorText>
      ) : (
        <ErrorSpan>noErrors</ErrorSpan>
      )}
      <LoginButton
        disabled={
          !(
            errors.email === null &&
            errors.password === null &&
            !(values.email === "" && values.password === "")
          )
        }
        type="submit"
      >
        {register ? "Registrovat" : "Přihlásit"}
      </LoginButton>
    </LoginForm>
  );
};

export default withRouter(AuthForm);

const LoginForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 0.3rem;
  min-height: 80vh;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  opacity: 0;
`;

const LoginButton = styled.button`
  padding: 0.3rem;
  font-weight: 700;
  font-size: 1.3rem;
  background-color: var(--green);
  border: 0.2rem solid white;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: floating-text 500ms ease-in-out;
  @media all and (max-width: 736px) {
    font-size: 1.7rem;
  }
  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
  :disabled {
    animation: none;
    border: 0.2rem solid grey;
    background-color: white;
    color: grey;
    cursor: not-allowed;
  }
  &:hover {
    color: var(--orange);
    border: 0.2rem solid var(--orange);
    background-color: white;
  }
`;
