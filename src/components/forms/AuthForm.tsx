import React, { useState, useCallback, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import styled, { css } from "styled-components";

import app from "../../firebase/firebase";
import { AuthContext } from "../../auth/Auth";
import validateAuth, { ValidationErrors } from "../../auth/validateAuth";
interface PropsFromState {
  register: boolean;
}

type LoginObject = {
  target: { elements: { email: { value: "" }; password: { value: "" } } };
};

interface IProps {
  inputErrors: any;
}

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
      <InputLabel htmlFor="email">Email</InputLabel>
      <EmailInput
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        value={values.email}
        inputErrors={errors.email}
        autoComplete="off"
        placeholder="nick@email.com"
      />
      {errors.email ? (
        <ErrorText>{errors.email}</ErrorText>
      ) : (
        <ErrorSpan>noErrors</ErrorSpan>
      )}
      <InputLabel htmlFor="password">Password</InputLabel>
      <PassInput
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        inputErrors={errors.password}
        name="password"
        type="password"
        placeholder="long-password"
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

const EmailInput = styled.input<IProps>`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.2rem;
  color: hsla(80, 100%, 30%, 1);
  width: 80%;
  border: 0.3rem solid var(--green);

  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
  ${({ inputErrors }) =>
    inputErrors &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.2rem;
      color: red;
      border: 0.3rem solid red;
      background-color: #ffc9aa;
    `}
`;

const PassInput = styled.input<IProps>`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.2rem;
  color: hsla(80, 100%, 30%, 1);
  width: 80%;
  border: 0.3rem solid var(--green);

  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
  ${({ inputErrors }) =>
    inputErrors &&
    css`
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.2rem;
      color: red;
      border: 0.3rem solid red;
      background-color: #ffc9aa;
    `}
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

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.2rem;
  color: hsla(80, 70%, 30%, 1);
  width: 80%;
`;

const LoginButton = styled.button`
  padding: 0.3rem;
  font-weight: 700;
  font-size: 1.3rem;
  background-color: var(--green);
  border: 0.2rem solid white;
  border-radius: 1rem;
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
