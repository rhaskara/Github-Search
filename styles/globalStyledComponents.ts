import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0 5rem;
  color: ${props => props?.theme?.colors?.primary};
`;

export const PageTitle = styled.h1`
  text-decoration: underline;
  color: ${props => props?.theme?.colors?.primary};
`;

export const EmptyComponent = styled.div`
  background-color: black;
`