import React from "react";
import { CSSTransition } from "react-transition-group";

import Footer from "./Footer";
import { PageLayout } from "../../styles/elements";

type Props = {
  inProp: boolean;
  animationName: string;
  children: React.ReactNode;
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
