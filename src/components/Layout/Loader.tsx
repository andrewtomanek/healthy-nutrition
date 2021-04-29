import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderBall1 />
      <LoaderBall2 />
      <LoaderBall3 />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.section`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media all and (max-width: 480px) {
    padding: 1rem;
  }
`;

const LoaderBall = styled.section`
  display: inline-block;
  margin: auto 0.25rem;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 0.375rem;
  background: #06c;
  animation: bulging 2s infinite ease-in-out;
  @media all and (max-width: 480px) {
    margin: 0;
  }
  @keyframes bulging {
    0%,
    80%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const LoaderBall1 = styled(LoaderBall)`
  animation-delay: -0.4s;
`;
const LoaderBall2 = styled(LoaderBall)`
  animation-delay: -0.2s;
`;
const LoaderBall3 = styled(LoaderBall)``;
