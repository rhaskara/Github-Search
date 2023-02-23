import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const ErrorText = styled.h3<{ active: boolean }>`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  color: ${(props) => props?.theme?.colors?.error};
`;

export const ReloadButton = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props?.theme?.colors?.primary};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${(props) => props?.theme?.colors?.highlight};
  background-color: ${(props) => props?.theme?.colors?.primary};
`;