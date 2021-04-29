import React from "react";
import { CSSTransition } from "react-transition-group";

type Props = {
  inProp: boolean;
  children: any;
};

const TransitionWrapper = ({ inProp, children }: Props) => {
  return (
    <CSSTransition in={inProp} timeout={300} classNames="alert" unmountOnExit>
      {children}
    </CSSTransition>
  );
};

export default TransitionWrapper;
