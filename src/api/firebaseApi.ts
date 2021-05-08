import app from "../firebase/firebase";

type AuthValues = {
  email: { value: string };
  password: { value: string };
};

export const firebaseLogIn = async (inputValues: AuthValues): Promise<any> => {
  const { email, password } = inputValues;
  try {
    await app.auth().signInWithEmailAndPassword(email.value, password.value);
  } catch (error) {
    alert(error);
  }
};

export const firebaseSignUp = async (inputValues: AuthValues): Promise<any> => {
  const { email, password } = inputValues;
  try {
    await app
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
  } catch (error) {
    alert(error);
  }
};
