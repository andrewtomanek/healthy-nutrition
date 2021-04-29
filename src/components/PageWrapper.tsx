import React from "react";
import { CSSTransition } from "react-transition-group";

import Footer from "../components/Footer";
import { PageLayout } from "../styles/elements";

type Props = {
  inProp: boolean;
  animationName: string;
  children: any;
};

const PageWrapper = ({ inProp, animationName, children }: Props) => {
  return (
    <CSSTransition
      component={null}
      in={inProp}
      timeout={500}
      classNames={animationName}
      mountOnEnter
      unmountOnExit
    >
      <PageLayout>
        {children}
        <Footer />
      </PageLayout>
    </CSSTransition>
  );
};

export default PageWrapper;
