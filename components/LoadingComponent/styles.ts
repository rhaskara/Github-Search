import styled, { keyframes } from "styled-components";

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props?.theme?.colors?.highlight};
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  border: 0.5rem solid ${(props) => props?.theme?.colors?.primary};
  border-top-color: ${(props) => props?.theme?.colors?.highlight};
  animation: ${rotate} 1s ease-in-out infinite;
`;
