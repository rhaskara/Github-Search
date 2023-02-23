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