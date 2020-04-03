import React from "react";
import AuthForm from "../components/forms/AuthForm";
import { PageLayout } from "../styles/elements";

const SignUp = () => {
  return (
    <PageLayout>
      <AuthForm register />
    </PageLayout>
  );
};

export default SignUp;
